import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';  // Importa HttpClientModule
import { AppComponent } from './app.component';
import { FantasyCharactersComponent } from './fantasy-characters/fantasy-characters.component';  // Importa il componente

@NgModule({
  declarations: [
    AppComponent,
    FantasyCharactersComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,  // Aggiungi HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

