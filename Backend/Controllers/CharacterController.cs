using Backend.Models;
using Microsoft.AspNetCore.Mvc;

namespace Backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CharacterController : ControllerBase
    {
        private static List<Character> _character = new List<Character>
        {
            new Character { Id = 1, Name = "Barbarian", Strength = 21, Intelligence = 8, Wisdom = 15, Constitution = 20, Dexterity = 16, Charisma = 13 },
            new Character { Id = 1, Name = "Wizard", Strength = 10, Intelligence = 13, Wisdom = 13, Constitution = 16, Dexterity = 20, Charisma = 19 },
        };

        // GET: api/Character
        [HttpGet]
        public ActionResult<IEnumerable<Character>> GetCharacters()
        {
            return Ok(_character);
        }

        // GET: api/Character/1
        [HttpGet("{id}")]
        public ActionResult<Character> GetCharacter(int id)
        {
            var character = _character.FirstOrDefault(p => p.Id == id);
            if (character == null)
                return NotFound();

            return Ok(character);
        }

        // POST: api/Character
        [HttpPost]
        public ActionResult<Character> CreateCharacters([FromBody] Character newCharacter)
        {
            newCharacter.Id = _character.Max(character => character.Id) + 1;
            _character.Add(newCharacter);

            return CreatedAtAction(nameof(GetCharacter), new { id = newCharacter.Id }, newCharacter);
        }

        // PUT: api/Character/1
        [HttpPut("{id}")]
        public ActionResult UpdateCharacter(int id, [FromBody] Character updatedCharacter)
        {
            var character = _character.FirstOrDefault(character => character.Id == id);
            if (character == null)
                return NotFound();

            character.Name = updatedCharacter.Name;
            character.Strength = updatedCharacter.Strength;

            return NoContent();
        }

        // DELETE: api/Character/1
        [HttpDelete("{id}")]
        public ActionResult DeleteCharacter(int id)
        {
            var character = _character.FirstOrDefault(character => character.Id == id);
            if (character == null)
                return NotFound();

            _character.Remove(character);
            return NoContent();
        }
    }
}
