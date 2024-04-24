using server.Data;
using server.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.Identity.Client;
namespace server.Repository;

public class GameRepository : IRepository
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