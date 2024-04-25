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
    public IEnumerable<Game> GetAllGames()
    {
        return _gameRepository.GetAllGames();
    }
}