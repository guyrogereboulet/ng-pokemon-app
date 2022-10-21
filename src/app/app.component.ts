import { Component, OnInit } from "@angular/core"; //Importimo gli emelenti che vengono dalla libreria di angular/core
import {POKEMONS} from "./mock-pokemon-list";
import { Pokemon } from "./pokemon";

@Component({
  selector: "app-root", //Il selector è il nome del componente
  // template: `<h1>Liste de Pokémons</h1>`,
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  //Esportiamo il componente per usarlo all'interno dell'intera applicazione
  pokemonList: Pokemon[] = POKEMONS;
  // Interfaccia del ciclo di vita onInit
  ngOnInit(): void {
    console.table(this.pokemonList);
  }

  selectPokemon(pokemon: MouseEvent) {
    const index: number = +(event?.target as HTMLInputElement).value
    console.log(`Vous avez cliqué sur le pokémon ${this.pokemonList[index].name}`);
  }
}
