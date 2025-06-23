import { Component, Input } from '@angular/core';
import { CommonModule, TitleCasePipe } from '@angular/common';

@Component({
  selector: 'app-move',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './move.component.html',
  styleUrl: './move.component.css'
})
export class MoveComponent {
  @Input() move!: any;
  descriptors = false;

  expand(){
    this.descriptors = !this.descriptors;
  }
}
