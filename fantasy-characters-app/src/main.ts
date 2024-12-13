import { bootstrapApplication } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; // Importa HttpClientModule
import { AppComponent } from './app/app.component'; // Importa il componente standalone

bootstrapApplication(AppComponent, {
  providers: [
    HttpClientModule,  // Aggiungi HttpClientModule come provider
  ],
})
  .catch(err => console.error(err));

