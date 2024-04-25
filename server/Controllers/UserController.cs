using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;


using server.Services;
using server.Models;
using server.Dtos;
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
  public IActionResult GetUserByName([FromQuery] string username)
  {

    User user = _userService.GetUserByName(username);
    return user is not null ? Ok(user)
    : BadRequest("No user found with this username");

  }

  [HttpGet("userId")]
  public IActionResult GetUserById([FromQuery] string userId)
  {
    User user = _userService.GetUserByName(userId);
    return user is not null ? Ok(user)
    : BadRequest("No user found with this username");
  }

  [HttpPost("register")]
  public async Task<ActionResult> Register(User user)
  {
    var result = await _userService.Register(user);
    if (result.Succeeded)
    {
      return Ok("Registration successful");
    }
    else
    {
      return BadRequest("Registration failed, please try again");
    }
  }
  [HttpPost("login")]
  public async Task<ActionResult> SignIn(LoginDto loginAttempt) //login dto
  {
    bool isLoggedIn = await _userService.Login(loginAttempt);
    if (isLoggedIn)
    {
      return Ok("Login successful");
    }
    else
    {
      return BadRequest("Login failed, please try again");
    }
  }

  [HttpGet("logout"), Authorize]
  public async Task<ActionResult> Logout()
  {
    try
    {
      await _userService.Logout();
    }
    catch (Exception e)
    {
      return BadRequest("Logout failed, please try again" + e.Message);
    }
    return Ok("Logged out successfully");
  }

  [HttpGet("verify"), Authorize]
  public async Task<ActionResult> VerifyUser()
  {
    try
    {
      var (isVerified, user) = await _userService.Authorize(HttpContext);
      if (!isVerified)
      {
        return Unauthorized("Not authorized to view this page");
      }
      return Ok(new {message = "Login succuessful", user });
    } catch (Exception e)
    {
      return BadRequest("Error verifying user: " + e.Message);
    }
  }
}