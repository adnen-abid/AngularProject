import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {UtilisateurComponent} from './composants/utilisateur/utilisateur.component';
import { DonneesService } from './services/donnees.service';

@NgModule({
  declarations: [
    AppComponent,
    UtilisateurComponent
  ], // Les composants
  imports: [
    BrowserModule,
    FormsModule
  ], // les modules
  providers: [DonneesService], //  les services
  bootstrap: [AppComponent]
})
export class AppModule {
}
