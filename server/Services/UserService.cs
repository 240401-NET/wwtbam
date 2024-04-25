using Microsoft.AspNetCore.Mvc;
using server.Data;
using server.Dtos;
using server.Models;
using Microsoft.AspNetCore.Identity;
using System.Security.Claims;
using Microsoft.AspNetCore.Authorization;

namespace server.Services;

public class UserService : IUserService
{
  private readonly SignInManager<User> _signInManager;
  private readonly UserManager<User> _userManager; private readonly IUserRepository _userRepository;

  public UserService(IUserRepository userRepository, SignInManager<User> signInManager, UserManager<User> userManager)
  {
    _userRepository = userRepository;
    _signInManager = signInManager;
    _userManager = userManager;
  }


  public async Task<(bool isVerified, User user)> Authorize(HttpContext context)
  {
    var _user = context.User;
    var principal = new ClaimsPrincipal(_user);
    var result = _signInManager.IsSignedIn(principal);
    
    if (!result)
    {
      return (false, null);
    }

    var user = await _signInManager.UserManager.GetUserAsync(principal);
    return (true, user);
  }

  public void DeleteUserByName(string username)
  {
    _userRepository.DeleteUserByName(username);
  }

  public User? GetUserById(string userId)
  {
    return _userRepository.GetUserById(userId);
  }

  public User? GetUserByName(string username)
  {
    return _userRepository.GetUserByName(username);
  }

  public async Task<bool> Login(LoginDto loginAttempt)
  {
    try {
      User user = await _userManager.FindByEmailAsync(loginAttempt.Email);
      if (user is not null)
      {
        loginAttempt.Username = user.UserName;
        if (!user.EmailConfirmed)
        {
          user.EmailConfirmed = true;
        }
        var result = await _signInManager.PasswordSignInAsync(user, loginAttempt.Password, loginAttempt.Remember, false);
        if (!result.Succeeded)
        {
          Console.WriteLine("Email or password was incorrect, please try again");
          return false;
        }
        var updated = await _userManager.UpdateAsync(user);
        return true;
      }
      else {
        Console.WriteLine("User not found");
        return false;
      }
    } catch (Exception e)
    {
      Console.WriteLine("Error logging in: " + e.Message);
      return false;
    }
  }

  public async Task<bool> Logout()
  {
    try {
      await _signInManager.SignOutAsync();
      Console.WriteLine("User logged out");
      return true;
    }
    catch (Exception e)
    {
       Console.WriteLine("Error logging out: " + e.Message);
       return false;
    }
  }

  public async Task<IdentityResult> Register(User user)
  {
    try {
    User newUser = new User()
    {
      Name = user.Name,
      UserName = user.UserName,
      Email = user.Email
    };  
    var result = await _userManager.CreateAsync(newUser, user.PasswordHash);
    return result;
    
    }
    catch (Exception e)
    {
      throw new Exception("Error registering user: " + e.Message);
      
    }
  }

  public void UpdateUser(User user)
  {
    _userRepository.UpdateUser(user);
  }
}