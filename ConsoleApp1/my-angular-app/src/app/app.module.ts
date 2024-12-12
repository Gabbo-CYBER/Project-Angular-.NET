import { Component, OnInit } from '@angular/core';
import { FantasyCharactersService, Character } from './services/fantasy-characters.service';

@Component({
  selector: 'app-root',
  template: `
    <h1>Fantasy Characters</h1>
    <ul>
      <li *ngFor="let character of characters">
        <strong>{{ character.name }}</strong> ({{ character.class }}) -
        Strength: {{ character.strength }},
        Dexterity: {{ character.dexterity }},
        Intelligence: {{ character.intelligence }}
      </li>
    </ul>
  `
})
export class AppComponent implements OnInit {
  characters: Character[] = [];

  constructor(private fantasyCharactersService: FantasyCharactersService) {}

  ngOnInit() {
    this.fantasyCharactersService.getCharacters().subscribe((data) => {
      this.characters = data;
    });
  }
}




