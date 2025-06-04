import { Component, Input } from '@angular/core';
import { PokepicComponent } from '../pokepic/pokepic.component';
import { DescriptionComponent } from '../description/description.component';
import { Pokemon } from '../models/pokemon.model';

@Component({
  selector: 'app-pokedata',
  standalone: true,
  imports: [PokepicComponent, DescriptionComponent],
  templateUrl: './pokedata.component.html',
  styleUrl: './pokedata.component.css'
})
export class PokedataComponent {
  @Input()
  data!: Pokemon; 
}
