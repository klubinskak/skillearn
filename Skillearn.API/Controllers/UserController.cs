using Microsoft.AspNetCore.Mvc;
using Skillearn.Data.Logic.Interfaces;
using Skillearn.Data.Models;

namespace Skillearn.API.Controllers
{
    [ApiController]
    [Route("user")]
    public class UserController : ControllerBase
    {
        private readonly ILogger<UserController> _logger;
        private readonly IUser _userLogic;

        public UserController(ILogger<UserController> logger, IUser userLogic)
        {
            _logger = logger;
            _userLogic = userLogic;
        }

        [HttpGet("getAllUsers")]
        public IActionResult GetAllUsers()
        {
           List<UserModel> returnModel = _userLogic.GetAllUsers();
            return Ok(returnModel);
        }

        [HttpPost("updateUser")]
        public IActionResult UpdateUser([FromBody] UserModel model)
        {
            UserModel returnModel = _userLogic.UpdateUser(model);
            return Ok(returnModel);
        }
    }
}
