using server.Models;
using server.Data;

namespace server.Services;

public class GameService : IGameService
{
    private readonly IGameRepository _gameRepository;
    public GameService(IGameRepository gameRepository)
    {
        _gameRepository = gameRepository;
    }

    // Create

    public Game AddNewGame(Game newGame)
    {
        return _gameRepository.AddNewGame(newGame);
    }

    // Retrieve

    public IEnumerable<Game> GetAllGames()
    {
        return _gameRepository.GetAllGames();
    }


    public Game? GetGameById(int id)
    {
        return _gameRepository.GetGameById(id);
    }

    // Update
    // Delete

    public Game? DeleteGame(int id)
    {
        return _gameRepository.DeleteGame(id);
    }
}