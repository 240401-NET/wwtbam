using server;
namespace server.Repository;

public interface IRepository
{
    IEnumerable<Game> GetAllGames();
    
    

}