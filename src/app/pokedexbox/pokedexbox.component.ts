import { Component, Injectable, OnInit, inject, } from '@angular/core';
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

export class PokedexboxComponent implements OnInit{
  private http = inject(HttpClient);

  pokeAPIData = {}
  allPokemon = []
  currentPokemon = {name:'???',
    height:0,
    weight:0,
    description: '',
    imgUrl: {front_default: 'question.png'},
    cryUrl: '?'
  }

  ngOnInit(): void {
    this.http.get<any>('https://pokeapi.co/api/v2/pokemon?limit=100000').subscribe((pokemon)=>{
      this.allPokemon = pokemon.results;
      console.log(this.allPokemon)
    })
  }
  searchPokemonName(pokemon: string | null): void{
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
