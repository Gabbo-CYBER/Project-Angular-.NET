namespace FantasyCharactersApi.Models
{
 public class FantasyCharacter
    {
        public string Name { get; set; }
        public string Class { get; set; }
        public int Strength { get; set; }
        public int Dexterity { get; set; }
        public int Intelligence { get; set; }

        public FantasyCharacter(string name, string @class, int strength, int dexterity, int intelligence)
        {
            Name = name;
            Class = @class;
            Strength = strength;
            Dexterity = dexterity;
            Intelligence = intelligence;
        }
    }
}
