namespace server.Data;
using server.Models;
public interface IUserRepository
{
  //GET
  User? GetUserByUsername(string username);
  User? GetUserById(string userId);

  void DeleteUserByUsername(string username);
  void UpdateUser(User user);
}