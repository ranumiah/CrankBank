using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace CrankBank.Controllers
{
    public class HomeController : Controller
    {
        // If we return the home path, we're gonna return the index document which is the view: /views/home/Index.cshtml is going to launch our application
        public IActionResult Index()
        {
            return View();
        }

        // This is a simple error action
        public IActionResult Error()
        { 
            return View();
        }
    }
}
