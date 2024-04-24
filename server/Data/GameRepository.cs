using server;
using Microsoft.EntityFrameworkCore;
using Microsoft.Identity.Client;
namespace Data;

public class GameRepository : IRepository
{
    private readonly KsjvContext _context;
    public GameRepository(KsjvContext context){
        _context = context;
    }

    public IEnumerable<Game> GetAllGames(){
        return _context.Games.ToList();
    }
    
    

}