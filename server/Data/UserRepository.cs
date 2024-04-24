using server.Models;
using Microsoft.EntityFrameworkCore;

namespace server.Data;

class UserRepository : IUserRepository
{
  private readonly KsjvContext _context;
  public UserRepository(KsjvContext context)
  {
    _context = context;
  }

  //GET ONE
  public User? GetUserByUsername(string username)
  {
    return _context.Users.FirstOrDefault(u => u.Username.Equals(username));
  }

  public void DeleteUserByUsername(string username)
  {
    User? toBeDeleted = _context.Users.FirstOrDefault(u => u.Username.Equals(username));
    if (toBeDeleted != null)
    {
      _context.Users.Remove(toBeDeleted);
      _context.SaveChanges();
    }
  }


  public User? GetUserById(string userId)
  {
    return _context.Users.Find(userId);

  }

  public void UpdateUser(User user)
  {
    User? existingUser = GetUserByUsername(user.Username);

    if (existingUser != null)
    {
      existingUser.Username = user.Username;
      Console.WriteLine("Username updated");
      _context.SaveChanges();
    }
  }
}