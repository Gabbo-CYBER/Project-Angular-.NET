import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // Importa HttpClient

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <h1>Hello, {{ title }}</h1>
    <table border="1" style="width: 100%; text-align: left;">
      <thead>
        <tr>
          <th>Nome</th>
          <th>Classe</th>
          <th>Forza</th>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let character of characters">
          <td>{{ character.name }}</td>
          <td>{{ character.class }}</td>
          <td>{{ character.strength }}</td>
        </tr>
      </tbody>
    </table>
  `,
  styles: [`
    table {
      border-collapse: collapse;
    }
    th, td {
      padding: 8px 12px;
    }
  `],
  imports: [],
})
export class AppComponent implements OnInit {
  title = 'fantasy-characters-app';
  characters: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.fetchCharacters();
  }

  fetchCharacters() {
    this.http.get<any[]>('https://localhost:5001/api/characters')
      .subscribe(data => {
        this.characters = data;
      }, error => {
        console.error('Errore nel recupero dei dati', error);
      });
  }
}










