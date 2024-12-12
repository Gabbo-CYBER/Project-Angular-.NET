import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Character {
  name: string;
  class: string;
  strength: number;
  dexterity: number;
  intelligence: number;
}

@Injectable({
  providedIn: 'root'
})
export class FantasyCharactersService {
  private apiUrl = 'http://localhost:5000/api/FantasyCharacters'; // Cambia l'URL se necessario

  constructor(private http: HttpClient) {}

  getCharacters(): Observable<Character[]> {
    return this.http.get<Character[]>(this.apiUrl);
  }
}
