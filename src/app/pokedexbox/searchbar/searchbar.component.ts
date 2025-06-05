import { Component, Output, EventEmitter, Input } from '@angular/core';
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
export class SearchbarComponent {
  faArrow = faAnglesRight
  @Input()
  imgUrl!: Object;
  @Output() searchNameEvent = new EventEmitter<string>()

  pokemonNameControl = new FormControl('')

  searchPokemonName(){
    this.searchNameEvent.emit(this.pokemonNameControl.value || '')
  }

}
