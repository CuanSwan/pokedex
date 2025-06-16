import { Component, Output, EventEmitter, Input, OnInit } from '@angular/core';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome'
import {faAnglesRight} from '@fortawesome/free-solid-svg-icons'
import { InterfaceComponent } from '../interface/interface.component';
import { PokepicComponent } from '../pokepic/pokepic.component';
import {FormControl, ReactiveFormsModule} from '@angular/forms'

@Component({
  selector: 'app-searchbar',
  standalone: true,
  imports: [InterfaceComponent, FontAwesomeModule, PokepicComponent, ReactiveFormsModule],
  templateUrl: './searchbar.component.html',
  styleUrl: './searchbar.component.css'
})
export class SearchbarComponent implements OnInit{
  faArrow = faAnglesRight
  @Input()
  prevPokemon!:(() => void)
  @Input() 
  nextPokemon!: (() => void)
  @Input()
  imgUrl!: Object;
  @Input()
  pokeList!: Array<any>;
  @Output() searchNameEvent = new EventEmitter<string>()

  pokemonNameControl = new FormControl('')
  newList = this.pokeList

  ngOnInit(): void{
    this.newList =this.pokeList    
    this.pokemonNameControl.valueChanges.subscribe(value => {
      console.log(value)
      this.newList = (this.pokeList.filter(p => p.name.includes(value)))
      console.log(this.newList)
    })
  }

  searchPokemonName(e: MouseEvent){
    e.preventDefault()
    this.searchNameEvent.emit(this.pokemonNameControl.value || '')
  }

  setFormValue(pokemon: any){
    console.log(pokemon)
    this.searchNameEvent.emit(pokemon.name)
  }
}
