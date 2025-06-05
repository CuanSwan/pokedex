import { Component, Injectable, inject, } from '@angular/core';
import { PokedataComponent } from './pokedata/pokedata.component';
import { PokepicComponent } from './pokepic/pokepic.component';
import { InterfaceComponent } from './interface/interface.component';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { HttpClient } from '@angular/common/http';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-pokedexbox',
  standalone: true,
  imports: [PokedataComponent, PokepicComponent, InterfaceComponent, SearchbarComponent],
  templateUrl: './pokedexbox.component.html',
  styleUrl: './pokedexbox.component.css'
})

@Injectable({providedIn: 'root'})

export class PokedexboxComponent {

  private http = inject(HttpClient);
  pokeAPIData = {}
  currentPokemon = {name:'',
    height:0,
    weight:0,
    description: '',
    imgUrl: {},
    cryUrl: ''
  }
  searchPokemonName(pokemon: string | null){
    forkJoin<[any, any]>([this.http.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`), this.http.get(`https://pokeapi.co/api/v2/pokemon-species/${pokemon}`)]).subscribe(([data1, data2]) => {
      console.log(data1.name)
      console.log(data2)
        this.currentPokemon = {
          name: data1.name,
          height: data1.height,
          weight: data1.weight,
          description: data2.flavor_text_entries.filter((entry: { language: any; }) => entry.language.name === 'en')[0].flavor_text,
          imgUrl:data1.sprites,
          cryUrl: data1.cries.latest
        }
        console.log(this.currentPokemon)
      })
  }
}
