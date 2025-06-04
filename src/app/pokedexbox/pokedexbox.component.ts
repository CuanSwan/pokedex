import { Component } from '@angular/core';
import { PokedataComponent } from './pokedata/pokedata.component';
import { PokepicComponent } from './pokepic/pokepic.component';
import { InterfaceComponent } from './interface/interface.component';
import { SearchbarComponent } from './searchbar/searchbar.component';

@Component({
  selector: 'app-pokedexbox',
  standalone: true,
  imports: [PokedataComponent, PokepicComponent, InterfaceComponent, SearchbarComponent],
  templateUrl: './pokedexbox.component.html',
  styleUrl: './pokedexbox.component.css'
})
export class PokedexboxComponent {
  currentPokemon = {name:'',
    height:0,
    weight:0,
    description: '',
    imgUrl: '',
    cryUrl: ''
  }
  searchPokemonName(pokemon: string | null){
    this.currentPokemon.name = pokemon || ''
    console.log(this.currentPokemon)
  }
}
