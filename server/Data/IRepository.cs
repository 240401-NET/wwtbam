using server;
namespace Data;

public interface IRepository
{
    IEnumerable<Game> GetAllGames();
    
    

}