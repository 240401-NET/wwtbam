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
   

    [Fact]
    public void UserService_GetUserByName_ReturnsTrue()
    {
        Mock<IUserRepository> repoMock = new Mock<IUserRepository>();
        UserService userService = new UserService(repoMock.Object);

        User user = new User
        {
            Name = "Name1"
        };

        repoMock.Setup(repo => repo.GetUserByName("Name1")).Returns(user);
        User? newUser = userService.GetUserByName("Name1");
        Assert.Equal(user, newUser);
    }

    [Fact]
    public void UserService_GetUserById_ReturnsCorrectUser()
    {
        Mock<IUserRepository> mockRepo = new Mock<IUserRepository>();
        UserService userService = new UserService(mockRepo.Object);

        User user = new User
        {
            Name = "Name2",
            Id = "1"
        };

        mockRepo.Setup(repo => repo.GetUserById("1")).Returns(user);
        Assert.Equal(userService.GetUserById("1"), user);
    }

    [Fact]
    public void UserService_UpdatesUser_CallsRepositoryMethod()
    {
        Mock<IUserRepository> mockRepo = new Mock<IUserRepository>();
        UserService userService = new UserService(mockRepo.Object);

        User user = new User
        {
            Name = "Name2",
            Id = "1"
        };
        userService.UpdateUser(user);
        mockRepo.Verify(repo => repo.UpdateUser(user), Times.Exactly(1));
    }
}