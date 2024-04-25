using server.Data;
using server.Models;

namespace server.Services;

public class UserService : IUserService
{
  private readonly IUserRepository _userRepository;
  public UserService(IUserRepository userRepository)
  {
    _userRepository = userRepository;
  }
  public void DeleteUserByUsername(string username)
  {
    _userRepository.DeleteUserByUsername(username);
  }

  public User? GetUserById(string userId)
  {
    return _userRepository.GetUserById(userId);
  }

  public User? GetUserByUsername(string username)
  {
    return _userRepository.GetUserByUsername(username);
  }

  public void UpdateUser(User user)
  {
    _userRepository.UpdateUser(user);
  }
}