using Microsoft.AspNetCore.Mvc;
using server.Services;
using server.Models;
namespace server.Controllers;

[ApiController]
[Route("api/[controller]")]
public class UserController : ControllerBase
{
  //register
  private IUserService _userService;

  public UserController(IUserService userService)
  {
    _userService = userService;
  }
  [HttpGet("username")]
  public IActionResult GetUserByUsername([FromQuery] string username)
  {

    User user = _userService.GetUserByUsername(username);
    return user is not null ? Ok(user)
    : BadRequest("No user found with this username");

  }

  [HttpGet("userId")]
  public IActionResult GetUserById([FromQuery] string userId)
  {
    User user = _userService.GetUserByUsername(userId);
    return user is not null ? Ok(user)
    : BadRequest("No user found with this username");
  }


  //login
  //logout
  //authorize
}