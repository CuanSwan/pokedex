import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PokedexboxComponent } from "./pokedexbox/pokedexbox.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PokedexboxComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'pokedex';
}
