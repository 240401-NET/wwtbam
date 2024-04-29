using Moq;
using server.Models;
using server.Data;
using server.Services;
using Microsoft.AspNetCore.Mvc.TagHelpers;

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

    [Theory]
    [InlineData(1)]
    public void GameService_GetGameById_ReturnGame(int id){
        //arrange
        Mock<IGameRepository> mockRepo= new Mock<IGameRepository>();
        Game fakeGame = new Game
             {
                GameId=1,
                UserId="Fakenumber",
                Score= 1000,
                PlayedAt=DateTime.UtcNow};
        mockRepo.Setup(repo => repo.GetGameById(id)).Returns(fakeGame);

        IGameService gameService = new GameService(mockRepo.Object);

        Game? gameRetrieved = gameService.GetGameById(id);

        //Assert
            Assert.Equal(1,gameRetrieved.GameId);
    }

    [Theory]
    [InlineData(3)]
    [InlineData(10)]
    [InlineData(20)]
    public void GameService_GetHighestScoreGame_ReturnsNHighestScoreGames(int numGames)
    {
        // Arrange
        Mock<IGameRepository> mockRepo= new Mock<IGameRepository>();
        Random mockRandom = new Random();
        List<Game> gamesList = new List<Game>();
        for (int i=0; i<50; i++) {
            gamesList.Add(new Game{
                GameId=i,
                UserId="Fakenumber"+i,
                Score= mockRandom.Next(1,50) * 1000,
                PlayedAt=DateTime.UtcNow});
        }
        mockRepo.Setup(repo => repo.GetAllGamesSorted()).Returns(gamesList.OrderBy(g=>g.Score));
        IGameService gameService = new GameService(mockRepo.Object);

        // Act
        List<Game> gamesRetrieved = gameService.GetHighestScoreGame(numGames).ToList();
        

        // Assert
        Assert.Equal(numGames, gamesRetrieved.Count());

    }
}