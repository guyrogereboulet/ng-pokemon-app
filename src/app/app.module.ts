import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'; // Fornisce gli elementi essenziali per il funzionamento dell'applicazione

import { AppRoutingModule } from './app-routing.module'; // Il file che si occupa del routing
import { AppComponent } from './app.component'; // Il nostro primo componente


@NgModule({ // Ci permette di dichiare tutti moduli che saranno usati nell'applicazione
  declarations: [// Sono tutti gli elementi che appartengono a questo modulo
    AppComponent
  ],
  imports: [ // Sono tutti gli elementi che abbiamo bisogno di importare che provengono da altri moduli
    BrowserModule,
    AppRoutingModule
  ],
  providers: [], // Sistema di dependence injections
  bootstrap: [AppComponent] // Dice a Angular che questo è il primo componente da Avviare 
})
export class AppModule { }
