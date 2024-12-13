import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'  
})
export class FantasyCharactersService {
  private apiUrl = 'http://localhost:5000/api/characters';  // URL dell'API

  constructor(private http: HttpClient) { }

  // Metodo per ottenere i personaggi
  getCharacters(): Observable<any> {
    return this.http.get<any>(this.apiUrl);  // Faccio una chiamata GET all'API
  }
}