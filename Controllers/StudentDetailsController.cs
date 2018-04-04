using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using TournamentManagementAdmin.Entities;

namespace TournamentManagementAdmin.Controllers
{
    [Produces("application/json")]
    [Route("api/StudentDetails")]
    public class StudentDetailsController : Controller
    {
        private readonly AdminContext _context;

        public StudentDetailsController(AdminContext context)
        {
            _context = context;
        }

        // GET: api/StudentDetails
        [HttpGet]
        public IEnumerable<StudentDetail> GetStudentDetail()
        {
            return _context.StudentDetail;
        }

        // GET: api/StudentDetails/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetStudentDetail([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var studentDetail = await _context.StudentDetail.SingleOrDefaultAsync(m => m.StudentDetailId == id);

            if (studentDetail == null)
            {
                return NotFound();
            }

            return Ok(studentDetail);
        }

        // PUT: api/StudentDetails/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutStudentDetail([FromRoute] int id, [FromBody] StudentDetail studentDetail)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != studentDetail.StudentDetailId)
            {
                return BadRequest();
            }

            _context.Entry(studentDetail).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!StudentDetailExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/StudentDetails
        [HttpPost]
        public async Task<IActionResult> PostStudentDetail([FromBody] StudentDetail studentDetail)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            _context.StudentDetail.Add(studentDetail);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetStudentDetail", new { id = studentDetail.StudentDetailId }, studentDetail);
        }

        // DELETE: api/StudentDetails/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteStudentDetail([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var studentDetail = await _context.StudentDetail.SingleOrDefaultAsync(m => m.StudentDetailId == id);
            if (studentDetail == null)
            {
                return NotFound();
            }

            _context.StudentDetail.Remove(studentDetail);
            await _context.SaveChangesAsync();

            return Ok(studentDetail);
        }

        private bool StudentDetailExists(int id)
        {
            return _context.StudentDetail.Any(e => e.StudentDetailId == id);
        }
    }
}