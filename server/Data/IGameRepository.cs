using server.Models;
namespace server.Data;

public interface IGameRepository
{
    IEnumerable<Game> GetAllGames();



}