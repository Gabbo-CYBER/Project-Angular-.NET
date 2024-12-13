import { Component, OnInit } from '@angular/core';
import { FantasyCharactersService } from './fantasy-characters.service';

@Component({
  selector: 'app-fantasy-characters',
  templateUrl: './fantasy-characters.component.html',
  styleUrls: ['./fantasy-characters.component.css']
})
export class FantasyCharactersComponent implements OnInit {
  characters: any[] = [];

  constructor(private characterService: FantasyCharactersService) { }

  ngOnInit(): void {
    this.characterService.getCharacters().subscribe(data => {
      this.characters = data;
    });
  }
}
