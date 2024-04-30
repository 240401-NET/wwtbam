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