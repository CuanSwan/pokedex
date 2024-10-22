import { Component } from '@angular/core';
import { PokepicComponent } from '../pokepic/pokepic.component';
import { DescriptionComponent } from '../description/description.component';

@Component({
  selector: 'app-pokedata',
  standalone: true,
  imports: [PokepicComponent, DescriptionComponent],
  templateUrl: './pokedata.component.html',
  styleUrl: './pokedata.component.css'
})
export class PokedataComponent {

}
