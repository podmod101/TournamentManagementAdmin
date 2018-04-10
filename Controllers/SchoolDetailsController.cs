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
    [Route("api/SchoolDetails")]
    public class SchoolDetailsController : Controller
    {
        private readonly AdminContext _context;

        public SchoolDetailsController(AdminContext context)
        {
            _context = context;
        }

        // GET: api/SchoolDetails
        [HttpGet]
        public IEnumerable<SchoolDetail> GetSchoolDetail()
        {
            return _context.SchoolDetail;
        }

        // GET: api/SchoolDetails/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetSchoolDetail([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var schoolDetail = await _context.SchoolDetail.SingleOrDefaultAsync(m => m.SchoolDetailId == id);

            if (schoolDetail == null)
            {
                return NotFound();
            }

            return Ok(schoolDetail);
        }

        // PUT: api/SchoolDetails/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutSchoolDetail([FromRoute] int id, [FromBody] SchoolDetail schoolDetail)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != schoolDetail.SchoolDetailId)
            {
                return BadRequest();
            }

            _context.Entry(schoolDetail).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!SchoolDetailExists(id))
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

        // POST: api/SchoolDetails
        [HttpPost]
        public async Task<IActionResult> PostSchoolDetail([FromBody] SchoolDetail schoolDetail)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            _context.SchoolDetail.Add(schoolDetail);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetSchoolDetail", new { id = schoolDetail.SchoolDetailId }, schoolDetail);
        }

        // DELETE: api/SchoolDetails/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteSchoolDetail([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var schoolDetail = await _context.SchoolDetail.SingleOrDefaultAsync(m => m.SchoolDetailId == id);
            if (schoolDetail == null)
            {
                return NotFound();
            }

            _context.SchoolDetail.Remove(schoolDetail);
            await _context.SaveChangesAsync();

            return Ok(schoolDetail);
        }

        private bool SchoolDetailExists(int id)
        {
            return _context.SchoolDetail.Any(e => e.SchoolDetailId == id);
        }
    }
}