using Moq;
using server.Models;
using server.Data;
using server.Services;

namespace server.Tests;

public class GameServiceTests
{
    [Fact]
    public void GameService_GetAllGames_ReturnsAllGames()
    {
        // Arrange
        // Create 3 users
        Game game1 = new Game
        {
            GameId = 1,
            UserId = "1",
            Score = 8000,
            PlayedAt = DateTime.UtcNow
        };
        Game game2 = new Game
        {
            GameId = 2,
            UserId = "1",
            Score = 1000,
            PlayedAt = DateTime.UtcNow
        };
        Game game3 = new Game
        {
            GameId = 3,
            UserId = "2",
            Score = 3000,
            PlayedAt = DateTime.UtcNow
        };
        // create list of games
        List<Game> gamesList = new List<Game>();
        gamesList.Add(game1);
        gamesList.Add(game2);
        gamesList.Add(game3);

        // Moq the database
        Mock<IGameRepository> mockRepo = new Mock<IGameRepository>();
        // setup the moq
        mockRepo.Setup(r => r.GetAllGames()).Returns(gamesList);
        // get the service
        IGameService gameService = new GameService(mockRepo.Object);

        // Act
        IEnumerable<Game> gamesRetrieved = gameService.GetAllGames();

        // Assert
        Assert.Equal(3, gamesRetrieved.Count());
    }

    [Fact]
    public void GameService_AddNewGame_ReturnsNewGame()
    {
        // Arrange
        // make a moq repository
        Mock<IGameRepository> mockRepo = new Mock<IGameRepository>();
        // Create a new game
        Game newGame = new Game
        {
            GameId = 1,
            UserId = "JoeBloe",
            Score = 8000,
            PlayedAt = DateTime.UtcNow
        };
        // Setup the Mock
        mockRepo.Setup(r => r.AddNewGame(newGame)).Returns(newGame);
        // Create service
        IGameService gameServ = new GameService(mockRepo.Object);

        // Act
        Game retrievedGame = gameServ.AddNewGame(newGame);

        // Assert
        Assert.True(retrievedGame != null);
        Assert.Equal("JoeBloe", retrievedGame.UserId);
    }

    [Fact]
    public void GameService_DeleteGame_ReturnsDeletedGame()
    {
        // Arrange
        // Moq Repo
        Mock<IGameRepository> mockRepo = new Mock<IGameRepository>();
        int GameId = 1;
        Game gameToDelete = new Game
        {
            GameId = 1,
            UserId = "MaryJain",
            Score = 8000,
            PlayedAt = DateTime.UtcNow
        };
        // Set Up the Mock Repo
        mockRepo.Setup(r => r.DeleteGame(GameId)).Returns(gameToDelete);
        IGameService gameServ = new GameService(mockRepo.Object);

        // Act
        Game? deletedGame = gameServ.DeleteGame(GameId);

        // Assert
        Assert.True(deletedGame != null);
        Assert.Equal(1, deletedGame.GameId);
    }
}