using server.Models;
namespace server.Data;

public interface IRepository
{
    IEnumerable<Game> GetAllGames();



}