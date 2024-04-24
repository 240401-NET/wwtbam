using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using System.Security.Claims;

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
  private readonly SignInManager<User> _signInManager;
  private readonly UserManager<User> _userManager;

  public UserController(IUserService userService, SignInManager<User> signInManager, UserManager<User> userManager)
  {
    _userService = userService;
    _signInManager = signInManager;
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
    string message;
    IdentityResult result = new();
    try
    {
      User _user = new User()
      {

      };
      result = await _userManager.CreateAsync(_user, user.PasswordHash); //no password needed
      if (!result.Succeeded)
      {
        return BadRequest(result);
      }
      message = "New user added";
    }
    catch (Exception e)
    {
      return BadRequest("Error creating user: " + e.Message);
    }
    return Ok(new { message = message, result = result });
  }
  [HttpPost("login")]
  public async Task<ActionResult> SignIn(LoginDto loginAttempt) //login dto
  {
    try
    {
      User _user = await _userManager.FindByEmailAsync(loginAttempt.Email);
      if (_user != null)
      {
        loginAttempt.Username = _user.UserName;
        if (!_user.EmailConfirmed)
        {
          _user.EmailConfirmed = true;
        }

        //(TUser user, string password, bool isPersistent, bool lockoutOnFailure);
        var result = await _signInManager.PasswordSignInAsync(_user, loginAttempt.Password, loginAttempt.Remember, false);
        if (!result.Succeeded)
        {
          return Unauthorized("Email or password was incorrect, please try again");
        }
        var updated = await _userManager.UpdateAsync(_user);
      }
      else
      {
        return BadRequest(new { message = "User not found" });
      }
    }
    catch (Exception e)
    {
      return BadRequest(new { message = "Error logging in: " + e.Message });
    }
    return Ok(new { message = "Login successful" });
  }

  [HttpGet("logout"), Authorize]//Authorize refers to having a cookie/token
  public async Task<ActionResult> Logout()
  {
    string message;
    try
    {
      await _signInManager.SignOutAsync();
    }
    catch (Exception e)
    {
      return BadRequest("Logout failed, please try again" + e.Message);
    }
    return Ok(new { message = "Logged out successfully" });
  }

  [HttpGet("verify"), Authorize]
  public async Task<ActionResult> VerifyUser()
  {
    string message = "Logged in";
    User currentUser = new();
    try
    {
      var _user = HttpContext.User;
      var principal = new ClaimsPrincipal(_user);
      var result = _signInManager.IsSignedIn(principal);
      if (result)
      {
        currentUser = await _signInManager.UserManager.GetUserAsync(principal);
      }
      else
      {
        return Forbid("Not authorized to view this page");
      }
    }
    catch (Exception e)
    {
      return BadRequest("Error verifying user: " + e.Message);
    }
    return Ok(new { message, user = currentUser });
  }




  //login
  //logout
  //authorize
}