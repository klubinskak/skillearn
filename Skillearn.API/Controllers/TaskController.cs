using System;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Skillearn.Data.Logic.Interfaces;
using Skillearn.Data.Models;

namespace Skillearn.API.Controllers
{
    [Route("task")]
    [ApiController]
    public class TaskController : ControllerBase
    {
        private readonly ILogger<TaskController> _logger;
        private readonly ITask _taskLogic;

        public TaskController(ILogger<TaskController> logger, ITask taskLogic)
        {
            _logger = logger;
            _taskLogic = taskLogic;
        }

        [HttpGet("getTasks/{dateTime}")]
        public IActionResult GetTasks([FromRoute]string dateTime)
        {
            List<TaskModel> returnModel = _taskLogic.GetTasks(dateTime);
            return Ok(returnModel);
        }

    }
}

