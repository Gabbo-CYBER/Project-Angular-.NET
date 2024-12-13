import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';  // Importo HttpClient per le richieste HTTP

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  characters: any[] = [];  // Definisco un array per memorizzare i personaggi


  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    // Effettuo la richiesta GET al backend API per ottenere i dati
    this.http.get<any[]>('http://localhost:5000/api/characters')  // Modifico l'URL se necessario
      .subscribe(
        data => {
          this.characters = data;  // Salvo i dati ricevuti nel campo characters
        },
        error => {
          console.error('Errore nella chiamata API', error);  // Gestisco eventuali errori
        }
      );
  }
}

