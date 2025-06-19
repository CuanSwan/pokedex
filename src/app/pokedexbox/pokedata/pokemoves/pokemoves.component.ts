import { Component, Input } from '@angular/core';
import { LoadingService } from '../../../services/loading.service';
import { inject } from '@angular/core';
import { NgIf, CommonModule } from '@angular/common';
import { MoveComponent } from "./move/move.component";

@Component({
  selector: 'app-pokemoves',
  standalone: true,
  imports: [NgIf, CommonModule, MoveComponent],
  templateUrl: './pokemoves.component.html',
  styleUrl: './pokemoves.component.css'
})
export class PokemovesComponent {
  loadingService = inject(LoadingService)

  @Input() moves!: any[];
}
