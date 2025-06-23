import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-ability',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ability.component.html',
  styleUrl: './ability.component.css'
})
export class AbilityComponent {
  @Input() ability!: any;

  descriptor = false;

  expand(){
    this.descriptor = !this.descriptor    
  }

  findEnglish(arr: any[]){
    return arr.find((flav: any)=> flav.language.name === 'en')
  }
}
