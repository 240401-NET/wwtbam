namespace server.Tests;
using server.Data;
using server.Models;
using server.Services;
using Moq;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Http;

public class AuthenticationTests
{
  [Fact]
  public async Task Login_ValidAttempt_ReturnsTrue()
  {
    var mockUserManager = new Mock<UserManager<User>>(
      Mock.Of<IUserStore<User>>(),
      null, null, null, null, null, null, null, null);
      var mockSignInManager = new Mock<SignInManager<User>>(
        Mock.Of<IUserStore<User>>(),
        Mock.Of<IHttpContextAccessor>
      )
    
  }
}