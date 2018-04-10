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
    [Route("api/Tournaments")]
    public class TournamentsController : Controller
    {
        private readonly AdminContext _context;

        public TournamentsController(AdminContext context)
        {
            _context = context;
        }

        // GET: api/Tournaments
        [HttpGet]
        public IEnumerable<Tournament> GetTournament()
        {
            return _context.Tournament;
        }

        // GET: api/Tournaments/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetTournament([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var tournament = await _context.Tournament.SingleOrDefaultAsync(m => m.TournamentId == id);

            if (tournament == null)
            {
                return NotFound();
            }

            return Ok(tournament);
        }

        // PUT: api/Tournaments/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutTournament([FromRoute] int id, [FromBody] Tournament tournament)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != tournament.TournamentId)
            {
                return BadRequest();
            }

            _context.Entry(tournament).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!TournamentExists(id))
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

        // POST: api/Tournaments
        [HttpPost]
        public async Task<IActionResult> PostTournament([FromBody] Tournament tournament)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            _context.Tournament.Add(tournament);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetTournament", new { id = tournament.TournamentId }, tournament);
        }

        // DELETE: api/Tournaments/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteTournament([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var tournament = await _context.Tournament.SingleOrDefaultAsync(m => m.TournamentId == id);
            if (tournament == null)
            {
                return NotFound();
            }

            _context.Tournament.Remove(tournament);
            await _context.SaveChangesAsync();

            return Ok(tournament);
        }

        private bool TournamentExists(int id)
        {
            return _context.Tournament.Any(e => e.TournamentId == id);
        }
    }
}