using server.Models;
namespace server.Repository;

public interface IRepository
{
    IEnumerable<Game> GetAllGames();



}