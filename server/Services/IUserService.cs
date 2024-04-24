namespace server.Services;
using server.Models;
public interface IUserService
{
  User? GetUserByUsername(string username);
  User? GetUserById(string userId);

  void DeleteUserByUsername(string username);
  void UpdateUser(User user);
}
