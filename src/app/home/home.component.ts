import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../service/pokemon.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  pokemonList: any[] = [];

  constructor(private pokemonService: PokemonService) {}

  ngOnInit() {
    this.loadPokemonList();
  }

  loadPokemonList() {
    this.pokemonService.getPokemonList().subscribe(
      (data) => {
        this.pokemonList = data.results;
      },
      (error) => {
        console.error('Error loading Pokemon list:', error);
      }
    );
  }

  getPokemonImageUrl(url: string): string {
    const pokemonId = this.extractPokemonId(url);
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`;
  }

  private extractPokemonId(url: string): string {
    const parts = url.split('/');
    return parts[parts.length - 2];
  }
}
