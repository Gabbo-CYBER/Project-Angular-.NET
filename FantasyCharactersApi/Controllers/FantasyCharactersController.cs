using Microsoft.AspNetCore.Mvc;

namespace FantasyCharactersApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class FantasyCharactersController : ControllerBase
    {
        // Simulo un array di personaggi fantasy
        private static readonly string[] Characters = new[]
        {
            "Frodo", "Gandalf", "Aragorn", "Legolas", "Gimli"
        };

        // GET api/fantasycharacters
        [HttpGet]
        public IActionResult GetCharacters()
        {
            return Ok(Characters);
        }

     
    }
}
