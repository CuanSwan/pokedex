import { Component, inject, Input } from '@angular/core';
import { AbilityComponent } from './ability/ability.component';
import { AbilLoadingService } from '../../../services/abil-loading.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pokeabilities',
  standalone: true,
  imports: [AbilityComponent, CommonModule],
  templateUrl: './pokeabilities.component.html',
  styleUrl: './pokeabilities.component.css'
})
export class PokeabilitiesComponent {
  @Input() abilities!: any[];
  @Input() name : any;

  abilLoadingService = inject(AbilLoadingService);
}
