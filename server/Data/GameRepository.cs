using server.Data;
using server.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.Identity.Client;
namespace server.Data;

public class GameRepository : IGameRepository
{
    private readonly KsjvContext _context;
    public GameRepository(KsjvContext context)
    {
        _context = context;
    }

    public IEnumerable<Game> GetAllGames()
    {
        return _context.Games.ToList();
    }



}