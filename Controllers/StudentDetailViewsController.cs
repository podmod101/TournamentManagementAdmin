using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace TournamentManagementAdmin.Controllers
{
    public class StudentDetailViewsController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}