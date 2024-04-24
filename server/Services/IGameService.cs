using server.Models;
using server.Data;

namespace server.Services;

public interface IGameService
{
    public IEnumerable<Game> GetAllGames();
}