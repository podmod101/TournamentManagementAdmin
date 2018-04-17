using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using TournamentManagementAdmin.Models;
using TournamentManagementAdmin.Entities;

namespace TournamentManagementAdmin.Controllers
{
    public class HomeController : Controller
    {
		private readonly AdminContext _context;

		public HomeController(AdminContext context)
		{
			_context = context;
		}

        public IActionResult Index()
        {
            return View();
        }

        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
