import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pokepic',
  standalone: true,
  imports: [],
  templateUrl: './pokepic.component.html',
  styleUrl: './pokepic.component.css'
})
export class PokepicComponent {
  @Input() imgUrl!: any; 
}
