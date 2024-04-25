namespace server.Services;
using Microsoft.AspNetCore.Identity;
using server.Dtos;
using server.Models;
public interface IUserService
{
  User? GetUserByName(string username);
  User? GetUserById(string userId);

  void DeleteUserByName(string username);
  void UpdateUser(User user);

  Task<IdentityResult> Register(User user);
  Task<bool> Login(LoginDto loginAttempt);
  Task<bool> Logout();
  Task<(bool isVerified, User user)> Authorize(HttpContext context);

}
