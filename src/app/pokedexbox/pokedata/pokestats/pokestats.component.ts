import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pokestats',
  standalone: true,
  imports: [],
  templateUrl: './pokestats.component.html',
  styleUrl: './pokestats.component.css'
})
export class PokestatsComponent {
  @Input() stats!: Array<any>
}
