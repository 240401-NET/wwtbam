namespace server.Services;
using Microsoft.AspNetCore.Identity;
using server.Dtos;
using server.Models;

public interface IAuthService
{
  Task<IdentityResult> Register(User user);
  Task<bool> Login(LoginDto loginAttempt);
  Task<bool> Logout();
  Task<(bool isVerified, User user)> Authorize(HttpContext context);
}