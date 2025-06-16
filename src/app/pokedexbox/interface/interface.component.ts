import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-interface',
  standalone: true,
  imports: [],
  templateUrl: './interface.component.html',
  styleUrl: './interface.component.css'
})
export class InterfaceComponent {
    @Input() 
    nextPokemon!: (()=>void)
    @Input()
    prevPokemon!: (() => void)

    handleNext(){
      this.nextPokemon()
    }

    handlePrev(){
      this.prevPokemon()
    }
}
