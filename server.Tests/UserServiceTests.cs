namespace server.Tests;
using server.Data;
using server.Models;
using server.Services;
using Moq;
public class UserServiceTests
{
    //Call repo method
    [Theory]
    [InlineData("Name1")]
    public void UserService_DeletesUser_CallsRepositoryMethod(string username)
    {
        Mock<IUserRepository> mockRepo = new Mock<IUserRepository>();

        UserService userService = new UserService(mockRepo.Object);

        userService.DeleteUserByName(username);

        mockRepo.Verify(repo => repo.DeleteUserByName(username), Times.Exactly(1));
    }
    // [Theory]
    // [InlineData("123")]
    // public void UserService_GetUserById_CallsRepositoryMethod(int userId)
    // {
    //     Mock<IUserRepository> mockRepo = new Mock<IUserRepository>();
    //     User user = new User{
    //         Name = "name",
    //         UserId = "123"
    //     }
    //     UserService userService = new UserService(mockRepo.Object);

    //     userService.DeleteUserByName(username);

    //     mockRepo.Verify(repo => repo.DeleteUserByName(username), Times.Exactly(1));
    // }

    // [Fact]
    // public void GetUserByNameReturnsTrue()
    // {
    //     Mock<IUserRepository> repoMock = new Mock<IUserRepository>();
    //     var names = new List<User>
    // {
    //     new User { Name = "User1" },
    //     new User { Name = "User2" }
    // };

    //     repoMock.Setup(repo => repo.GetUserByName("User1")).Returns(User.FromResult(names.First(u => u.Name == "User1")));
    //     var result = repoMock.Object.GetUserByName("User1");
    //     Assert.Equal("User1", result.Name);
    // }

    [Fact]
    public void UserService_GetUserByName_ReturnsTrue()
    {
        Mock<IUserRepository> repoMock = new Mock<IUserRepository>();
        UserService userService = new UserService(repoMock.Object);

        User user = new User
        {
            UserId = 1,
            Name = "Name1"
        };


        repoMock.Setup(repo => repo.GetUserByName("Name1")).Returns(user);
        User? newUser = userService.GetUserByName("Name1");
        Assert.Equal(user, newUser);
    }

    // [Fact]
    // public void UserService_GetUserById_ReturnsCorrectUser()
    // {
    //     Mock<IUserRepository> mockRepo = new Mock<IUserRepository>();
    //     UserService userService = new UserService(mockRepo.Object);

    //     User user = new User
    //     {
    //         UserId = 1,
    //         Name = "Name2"
    //     };

    //     mockRepo.Setup(repo => repo.GetUserById(1)).Returns(user);
    // }
    // [Theory]
    // [InlineData("Name1")]
    // public void UserService_GetUserByName_CallsRepositoryDelteMethod(string username)
    // {
    //     Mock<IUserRepository> mockRepo = new Mock<IUserRepository>();

    //     UserService userService = new UserService(mockRepo.Object);

    //     userService.DeleteUserByName(username);

    //     mockRepo.Verify(repo => repo.DeleteUserByName(username), Times.Exactly(1));
    // }
    // [Theory]
    // [InlineData("Name1")]
    // public void UserService_DeletesUser_CallsRepositoryDelteMethod(string username)
    // {
    //     Mock<IUserRepository> mockRepo = new Mock<IUserRepository>();

    //     UserService userService = new UserService(mockRepo.Object);

    //     userService.DeleteUserByName(username);

    //     mockRepo.Verify(repo => repo.DeleteUserByName(username), Times.Exactly(1));
    // }

}