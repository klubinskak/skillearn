using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Skillearn.Data.Logic.Interfaces;
using Skillearn.Data.Models;

namespace Skillearn.API.Controllers
{
    [Route("role")]
    [ApiController]
    public class RoleController : ControllerBase
    {
        private readonly ILogger<RoleController> _logger;
        private readonly IRole _roleLogic;

        public RoleController(ILogger<RoleController> logger, IRole roleLogic)
        {
            _logger = logger;
            _roleLogic = roleLogic;
        }

        [HttpGet("getAllRoles")]
        public IActionResult GetAllRoles()
        {
            List<RoleModel> returnModel = _roleLogic.GetAllRoles();
            return Ok(returnModel);
        }

    }
}
