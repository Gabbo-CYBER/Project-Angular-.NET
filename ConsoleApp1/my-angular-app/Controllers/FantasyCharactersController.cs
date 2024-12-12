using Microsoft.AspNetCore.Mvc;

namespace FantasyCharactersApi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class FantasyCharactersController : ControllerBase
    {
        private static readonly List<Character> Characters = new()
        {
            new Character { Name = "Arthas", Class = "Paladin", Strength = 18, Dexterity = 12, Intelligence = 14 },
            new Character { Name = "Jaina", Class = "Mage", Strength = 8, Dexterity = 10, Intelligence = 20 },
            new Character { Name = "Thrall", Class = "Shaman", Strength = 16, Dexterity = 14, Intelligence = 16 }
        };

        [HttpGet]
        public IActionResult Get()
        {
            return Ok(Characters);
        }

        public record Character
        {
            public string Name { get; set; }
            public string Class { get; set; }
            public int Strength { get; set; }
            public int Dexterity { get; set; }
            public int Intelligence { get; set; }
        }
    }
}
