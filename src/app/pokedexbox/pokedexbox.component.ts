import { Component, Injectable, OnInit, inject, } from '@angular/core';
import { PokedataComponent } from './pokedata/pokedata.component';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { HttpClient } from '@angular/common/http';
import { forkJoin, pipe,from,concatMap, delay, Subject, debounce, switchMap, debounceTime, catchError, of, tap, Subscription, filter, map } from 'rxjs';
import { LoadingService } from '../services/loading.service';
import { ImgloadingService } from '../services/imgloading.service';
import { AbilLoadingService } from '../services/abil-loading.service';

@Component({
  selector: 'app-pokedexbox',
  standalone: true,
  imports: [PokedataComponent, SearchbarComponent],
  templateUrl: './pokedexbox.component.html',
  styleUrl: './pokedexbox.component.css'
})

export class PokedexboxComponent implements OnInit{
  private http = inject(HttpClient);
  loadingService = inject(LoadingService);
  imgService = inject(ImgloadingService)
  abilService = inject(AbilLoadingService)
  searchTrigger$ = new Subject<string>(); 
  private moveSub:Subscription = new Subscription();
  allPokemon = [];
  currentPokemon = {
    //Add Movesets
    //Add background
    name:'???',
    id: 0,
    height:0.0,
    weight:0.0,
    description: '???',
    imgUrl: [["",<unknown>""]],
    cryUrl: '???',
    baseStats:[],
    types: [], 
    moveNames: [], 
    moves: [{}],
    abilityUrls: [],
    abilities: [] 
  }
  currentIndex: number = 0;

  ngOnInit(): void {
    this.http.get<any>('https://pokeapi.co/api/v2/pokemon?limit=1025').subscribe((pokemon)=>{
      this.allPokemon = pokemon.results;
      this.setupSearchTrigger()
      this.searchTrigger$.next(this.allPokemon[0]['name'])
    })
  }
  nextPokemon = ()=>{
    this.currentIndex = (this.currentIndex+1) % this.allPokemon.length
    this.searchTrigger$.next(this.allPokemon[this.currentIndex]["name"])
  }
  prevPokemon = ()=>{
    this.currentIndex = (this.currentIndex-1 + this.allPokemon.length) % this.allPokemon.length
    this.searchTrigger$.next(this.allPokemon[this.currentIndex]["name"])
  }

  chunkArray(items: any[], batchSize: number){
    const chunks = [];
    for (let i=0; i< items.length; i+=batchSize){
      chunks.push(items.slice(i, i + batchSize))
    }
    return chunks;
  }

  removeEntries(sprites: any){
    const {other, versions, ...rest} = sprites
    const filtered = Object.entries(rest).filter(([_, value]) => value !== null)
    return filtered
  }

  setupSearchTrigger(): void{
    this.searchTrigger$.pipe(
      tap(()=>{
        this.loadingService.setLoading(true)
        this.imgService.setLoading(true)
        this.abilService.setLoading(true)
      }),
      debounceTime(300),
      switchMap((pokemon)=>
          forkJoin<[any, any]>([
              this.http.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`),
              this.http.get(`https://pokeapi.co/api/v2/pokemon-species/${pokemon}`)
             ]).pipe(
                catchError((err: any)=> {
                  console.error(err)
                  this.setFallbackPokemon()
                  return of(null)
                })
             )
            ) 
    ).subscribe((data) => {
        if(!data) return;
        if(this.moveSub){
          this.moveSub.unsubscribe()
        }
        const [data1, data2] = data;
        this.currentPokemon = {
          name: data1.name,
          id: data1.id,
          height: data1.height /10,
          weight: data1.weight /10,
          description: data2.flavor_text_entries.filter((entry: { language: any; }) => entry.language.name === 'en')[0].flavor_text,
          imgUrl:this.removeEntries(data1.sprites),
          cryUrl: data1.cries.latest,
          baseStats: data1.stats,
          types: data1.types.map((type: any) => {return type.type.name}),
          moveNames: data1.moves.map((m: any) => m.move.url),
          moves: [],
          abilityUrls: data1.abilities.map((ability: any)=>({
            url:ability.ability.url,
            is_hidden: ability.is_hidden
          })),
          abilities: []
        }
        forkJoin(this.currentPokemon.abilityUrls.map(abObj => {
          const {url, is_hidden} = abObj
          return this.http.get(url).pipe(
            map((abData: any)=> ({
                ...abData,
                is_hidden
            }))
        )}
      )).pipe(
            catchError((err) => {
              console.error()
              this.setFallbackPokemon()
              return of([])
            })
          ).subscribe((abilityDetails: any)=> {
            this.currentPokemon.abilities = abilityDetails
            this.abilService.setLoading(false)
        })
        this.imgService.setLoading(false)
        this.currentIndex = data1.id-1
        const moveUrls = this.chunkArray(this.currentPokemon.moveNames, 5)
        this.currentPokemon.moves = []
        this.moveSub = from(moveUrls).pipe(
            concatMap((batch: string[])=>{
              return forkJoin(batch.map((url)=> this.http.get(url))).pipe(delay(500))
            })
        ).subscribe({
          next: (results) => {
            this.currentPokemon.moves.push(...results)
          },
          error: err => {
            console.log('Error:', err) 
            this.setFallbackPokemon()
          },
          complete: () => {
            console.log('Complete all batches')
            this.loadingService.setLoading(false)
          }
        })
    })
  }

  setFallbackPokemon(){
   this.currentPokemon =  {
    //Add background
    name:'???',
    id: 0,
    height:0.0,
    weight:0.0,
    description: '???',
    imgUrl: [['front_default', 'question.png']],
    cryUrl: '???',
    baseStats:[],
    types: [], 
    moveNames: [], 
    moves: [],
    abilityUrls: [],
    abilities: [] // to be implemented. add component for ability details
  } 
  }
}
