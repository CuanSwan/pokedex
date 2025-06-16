import { Component, Injectable, OnInit, inject, } from '@angular/core';
import { PokedataComponent } from './pokedata/pokedata.component';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { HttpClient } from '@angular/common/http';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-pokedexbox',
  standalone: true,
  imports: [PokedataComponent, SearchbarComponent],
  templateUrl: './pokedexbox.component.html',
  styleUrl: './pokedexbox.component.css'
})

@Injectable({providedIn: 'root'})

export class PokedexboxComponent implements OnInit{
  private http = inject(HttpClient);
  pokeAPIData = {}
  allPokemon = []
  currentPokemon = {name:'???',
    id: 0,
    height:0.0,
    weight:0.0,
    description: '???',
    baseStats:[],
    imgUrl: {front_default: 'question.png'},
    cryUrl: '???'
  }
  currentIndex: number = 0;

  ngOnInit(): void {
    this.http.get<any>('https://pokeapi.co/api/v2/pokemon?limit=1025').subscribe((pokemon)=>{
      console.log(pokemon.results)
      this.allPokemon = pokemon.results;
      this.searchPokemonName(pokemon.results[0].name)
    })
  }
  nextPokemon = ()=>{
    this.currentIndex = (this.currentIndex+1) % this.allPokemon.length
    this.searchPokemonName(this.allPokemon[this.currentIndex]["name"])
  }

  prevPokemon = ()=>{
    this.currentIndex = (this.currentIndex-1 + this.allPokemon.length) % this.allPokemon.length
    this.searchPokemonName(this.allPokemon[this.currentIndex]["name"])
  }

  searchPokemonName(pokemon: string | null): void{
    forkJoin<[any, any]>([this.http.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`), this.http.get(`https://pokeapi.co/api/v2/pokemon-species/${pokemon}`)]).subscribe(([data1, data2]) => {
        this.currentPokemon = {
          name: data1.name,
          id: data1.id,
          height: data1.height /10,
          weight: data1.weight /10,
          description: data2.flavor_text_entries.filter((entry: { language: any; }) => entry.language.name === 'en')[0].flavor_text,
          imgUrl:data1.sprites,
          cryUrl: data1.cries.latest,
          baseStats: data1.stats
        }
      this.currentIndex = data1.id-1
      })
      console.log(this.currentPokemon.baseStats)
  }
}
