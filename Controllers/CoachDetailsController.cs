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
    [Route("api/CoachDetails")]
    public class CoachDetailsController : Controller
    {
        private readonly AdminContext _context;

        public CoachDetailsController(AdminContext context)
        {
            _context = context;
        }

        // GET: api/CoachDetails
        [HttpGet]
        public IEnumerable<CoachDetail> GetCoachDetail()
        {
            return _context.CoachDetail;
        }

        // GET: api/CoachDetails/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetCoachDetail([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var coachDetail = await _context.CoachDetail.SingleOrDefaultAsync(m => m.CoachDetailId == id);

            if (coachDetail == null)
            {
                return NotFound();
            }

            return Ok(coachDetail);
        }

        // PUT: api/CoachDetails/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutCoachDetail([FromRoute] int id, [FromBody] CoachDetail coachDetail)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != coachDetail.CoachDetailId)
            {
                return BadRequest();
            }

            _context.Entry(coachDetail).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!CoachDetailExists(id))
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

        // POST: api/CoachDetails
        [HttpPost]
        public async Task<IActionResult> PostCoachDetail([FromBody] CoachDetail coachDetail)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            _context.CoachDetail.Add(coachDetail);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetCoachDetail", new { id = coachDetail.CoachDetailId }, coachDetail);
        }

        // DELETE: api/CoachDetails/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteCoachDetail([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var coachDetail = await _context.CoachDetail.SingleOrDefaultAsync(m => m.CoachDetailId == id);
            if (coachDetail == null)
            {
                return NotFound();
            }

            _context.CoachDetail.Remove(coachDetail);
            await _context.SaveChangesAsync();

            return Ok(coachDetail);
        }

        private bool CoachDetailExists(int id)
        {
            return _context.CoachDetail.Any(e => e.CoachDetailId == id);
        }
    }
}