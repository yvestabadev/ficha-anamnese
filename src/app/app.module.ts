import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FichaAnamneseComponent } from './ficha-anamnese/ficha-anamnese.component';
import { AnalisePesComponent } from './ficha-anamnese/analise-pes/analise-pes.component';
import { FormsModule } from '@angular/forms';
import { FolhaA4Component } from './folha-a4/folha-a4.component';

@NgModule({
  declarations: [
    AppComponent,
    FichaAnamneseComponent,
    AnalisePesComponent,
    FolhaA4Component
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
