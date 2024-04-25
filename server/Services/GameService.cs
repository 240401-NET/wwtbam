using server.Models;
using server.Data;

namespace server.Services;

class GameService : IGameService
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

    // Update

    public IEnumerable<Game> GetAllGames()
    {
        return _gameRepository.GetAllGames();
    }


    public Game? GetGameById(int id)
    {
        return _gameRepository.GetGameById(id);
    }

    // Retrieve
    // Delete

    public Game? DeleteGame(int id)
    {
        return _gameRepository.DeleteGame(id);
    }
}