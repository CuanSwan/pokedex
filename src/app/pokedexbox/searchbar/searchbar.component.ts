import { Component } from '@angular/core';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome'
import {faAnglesRight} from '@fortawesome/free-solid-svg-icons'
import { InterfaceComponent } from '../interface/interface.component';
import { PokepicComponent } from '../pokepic/pokepic.component';

@Component({
  selector: 'app-searchbar',
  standalone: true,
  imports: [InterfaceComponent, FontAwesomeModule, PokepicComponent],
  templateUrl: './searchbar.component.html',
  styleUrl: './searchbar.component.css'
})
export class SearchbarComponent {
  faArrow = faAnglesRight
}
