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
    [Route("api/Schools")]
    public class SchoolsController : Controller
    {
        private readonly AdminContext _context;

        public SchoolsController(AdminContext context)
        {
            _context = context;
        }

        // GET: api/Schools
        [HttpGet]
        public IEnumerable<School> GetSchool()
        {
            return _context.School;
        }

        // GET: api/Schools/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetSchool([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var school = await _context.School.SingleOrDefaultAsync(m => m.SchoolId == id);

            if (school == null)
            {
                return NotFound();
            }

            return Ok(school);
        }

        // PUT: api/Schools/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutSchool([FromRoute] int id, [FromBody] School school)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != school.SchoolId)
            {
                return BadRequest();
            }

            _context.Entry(school).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!SchoolExists(id))
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

        // POST: api/Schools
        [HttpPost]
        public async Task<IActionResult> PostSchool([FromBody] School school)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            _context.School.Add(school);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetSchool", new { id = school.SchoolId }, school);
        }

        // DELETE: api/Schools/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteSchool([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var school = await _context.School.SingleOrDefaultAsync(m => m.SchoolId == id);
            if (school == null)
            {
                return NotFound();
            }

            _context.School.Remove(school);
            await _context.SaveChangesAsync();

            return Ok(school);
        }

        private bool SchoolExists(int id)
        {
            return _context.School.Any(e => e.SchoolId == id);
        }
    }
}