import { Component } from '@angular/core';
import { PokedataComponent } from '../pokedata/pokedata.component';
import { PokepicComponent } from '../pokepic/pokepic.component';
import { InterfaceComponent } from '../interface/interface.component';
import { SearchbarComponent } from '../searchbar/searchbar.component';

@Component({
  selector: 'app-pokedexbox',
  standalone: true,
  imports: [PokedataComponent, PokepicComponent, InterfaceComponent, SearchbarComponent],
  templateUrl: './pokedexbox.component.html',
  styleUrl: './pokedexbox.component.css'
})
export class PokedexboxComponent {

}
