using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

using server.Models;
using server.Services;

namespace server.Controllers;

[Route("api/[controller]")]
public class GameController : ControllerBase
{
    private readonly IGameService _gameService;
    public GameController(IGameService gameService)
    {
        _gameService = gameService;
    }

    [HttpGet("Games")]
    public ActionResult<IEnumerable<Game>> GetAllGames()
    {
        try
        {
            return Ok("ok bro");
        }
        catch (Exception e)
        {
            return BadRequest(e.Message);
        }
    }
}