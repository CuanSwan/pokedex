import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DescriptionComponent } from './description/description.component';
import { PokeabilitiesComponent } from './pokeabilities/pokeabilities.component';
import { PokemovesComponent } from './pokemoves/pokemoves.component';
import { PokestatsComponent } from './pokestats/pokestats.component';
import { faPlay, faPause } from '@fortawesome/free-solid-svg-icons';
import { Pokemon } from '../models/pokemon.model';

@Component({
  selector: 'app-pokedata',
  standalone: true,
  imports: [DescriptionComponent, FontAwesomeModule, PokeabilitiesComponent, PokemovesComponent, PokestatsComponent],
  templateUrl: './pokedata.component.html',
  styleUrl: './pokedata.component.css'
})
export class PokedataComponent{
  @ViewChild('audioRef') audioEle!: ElementRef<HTMLAudioElement>
  @Input()
  data!: Pokemon;
  counter = 0;

  faPlay = faPlay
  faPause = faPause
  ngAfterViewInit(): void{
    this.audioEle.nativeElement.volume = 0.4
  }
  next(): void{
    this.counter = (this.counter + 1) % 4
  }
  prev(): void{
    this.counter = (this.counter - 1 + 4) % 4
  }
  play(): void{
    this.audioEle.nativeElement.play()
  }

  pause(): void{
    this.audioEle.nativeElement.pause()
    this.audioEle.nativeElement
  }
}
