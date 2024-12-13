using FantasyCharactersApi.Models;
using Microsoft.AspNetCore.Mvc;

namespace FantasyCharactersApi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class FantasyCharactersController : ControllerBase
    {
        private static readonly List<FantasyCharacter> Characters = new()
{
    new FantasyCharacter("Frodo", "Rogue", 8, 14, 10),
    new FantasyCharacter("Gandalf", "Wizard", 10, 12, 18),
    new FantasyCharacter("Aragorn", "Warrior", 16, 14, 12),
    new FantasyCharacter("Legolas", "Archer", 12, 18, 14),
    new FantasyCharacter("Gimli", "Barbarian", 18, 10, 8)
};


        [HttpGet]
        public ActionResult<IEnumerable<FantasyCharacter>> GetCharacters()
        {
            return Ok(Characters);
        }
    }
}

