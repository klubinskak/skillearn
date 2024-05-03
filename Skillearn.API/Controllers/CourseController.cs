using Microsoft.AspNetCore.Mvc;
using Skillearn.Data.Logic;
using Skillearn.Data.Logic.Interfaces;
using Skillearn.Data.Models;

namespace Skillearn.API.Controllers
{
    [ApiController]
    [Route("course")]
    public class CourseController : ControllerBase
    {
        private readonly ILogger<UserController> _logger;
        private readonly ICourse _courseLogic;

        public CourseController(ILogger<UserController> logger, ICourse courseLogic)
        {
            _logger = logger;
            _courseLogic = courseLogic;
        }

        [HttpGet("getAllCourses")]
        public IActionResult GetAllCourses()
        {
            List<Course> returnModel = _courseLogic.GetAllCourses();
            return Ok(returnModel);
        }

        [HttpGet("getTopCourses/{limit}")]
        public IActionResult GetTopCourses(int limit)
        {
            List<Course> returnModel = _courseLogic.GetTopCourses(limit);
            return Ok(returnModel);
        }

        [HttpGet("getCourseDetail/{courseId}")]
        public IActionResult GetCourseDetail(string courseId)
        {
            Course returnModel = _courseLogic.GetCourseDetail(courseId);
            return Ok(returnModel);
        }
    }
}
