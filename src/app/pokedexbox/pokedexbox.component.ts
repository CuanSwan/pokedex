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
  currentPokemon = {
    //Add Movesets
    //Add background
    name:'???',
    id: 0,
    height:0.0,
    weight:0.0,
    description: '???',
    imgUrl: {front_default: 'question.png'},
    cryUrl: '???',
    baseStats:[], // to be implemented. Add styling for bar like display. conditional based on 1 to 255 percentage
    types: [], // to be implemented. Add .svg icons depending on types gotten from API
    moves: [], // to be implemented. 
    abilities: []
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
    forkJoin<[any, any]>([this.http.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`), this.http.get(`https://pokeapi.co/api/v2/pokemon-species/${pokemon}`)]).subscribe({next: ([data1, data2]) => {
        this.currentPokemon = {
          name: data1.name,
          id: data1.id,
          height: data1.height /10,
          weight: data1.weight /10,
          description: data2.flavor_text_entries.filter((entry: { language: any; }) => entry.language.name === 'en')[0].flavor_text,
          imgUrl:data1.sprites,
          cryUrl: data1.cries.latest,
          baseStats: data1.stats,
          types: data1.types.map((type: any) => {return type.type.name}),
          moves: data1.moves,
          abilities: data1.abilities,
        },
      this.currentIndex = data1.id-1
    },
    error: (err) => {
      console.error(err)
      this.currentPokemon = {
            name:'???',
            id: 0,
            height:0.0,
            weight:0.0,
            description: '???',
            baseStats:[], // to be implemented. Add styling for bar like display. conditional based on 1 to 255 percentage
            imgUrl: {front_default: 'question.png'},
            cryUrl: '???',
            types: [],
            moves: [],
            abilities: [],
        } 
    }})
    console.log(this.currentPokemon.baseStats)
  }
}
