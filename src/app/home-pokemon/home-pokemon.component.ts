import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../services/pokemon.service';
import { Router } from '@angular/router';
import { HostListener } from '@angular/core';

@Component({
  selector: 'app-home-pokemon',
  templateUrl: './home-pokemon.component.html',
  styleUrls: ['./home-pokemon.component.scss']
})
export class HomePokemonComponent implements OnInit {

  pokemons: any[] = [];
  offset: number = 0;
  limit: number = 21;
  totalPokemons: number = 0;
  currentStart: number = 0;
  currentEnd: number = 0;
  filteredPokemons: any[] = [];
  pokemonTypes: string[] = ['grass', 'fire', 'water', 'bug', 'normal', 'electric', 'ground', 'flying', 'psychic', 'rock', 'ice', 'ghost', 'dark', 'dragon', 'steel', 'fairy'];
  selectedTypes: Set<string> = new Set();
  showFilterDropdown = false;

  constructor(
    private pokemonService: PokemonService,
    private router: Router
  ) { }


  ngOnInit() {
    this.loadPokemons();
  }

  loadPokemons() {
    // If a filter is applied, load only filtered Pokémon
    if (this.selectedTypes.size > 0) {
      this.filteredPokemons = this.pokemons.filter(pokemon =>
        pokemon.types.some(typeInfo => this.selectedTypes.has(typeInfo.type.name))
      );
      this.totalPokemons = this.filteredPokemons.length;
      this.updatePaginationInfo();
    } else {
      // Load full data if no filter is applied
      this.pokemons = [];
      this.pokemonService.getPokemonList(this.limit, this.offset).subscribe((response: any) => {
        this.totalPokemons = response.count;

        response.results.forEach((result: any) => {
          this.pokemonService.getPokemonDetail(result.name).subscribe((pokemonData: any) => {
            this.pokemons.push(pokemonData);
            this.filteredPokemons = [...this.pokemons];
          });
        });
        this.updatePaginationInfo();
      });
    }
  }

  toggleFilterDropdown() {
    this.showFilterDropdown = !this.showFilterDropdown;
  }


  // Close dropdown if clicked outside
  @HostListener('document:click', ['$event'])
  clickOutside(event: MouseEvent) {
    const filterButton = document.querySelector('.filter-button');
    const filterDropdown = document.querySelector('.filter-dropdown');

    if (filterButton && filterDropdown) {
      if (!filterButton.contains(event.target as Node) && !filterDropdown.contains(event.target as Node)) {
        this.showFilterDropdown = false;
      }
    }
  }

  onTypeFilterChange(event: any) {
    const type = event.target.value;
    if (event.target.checked) {
      this.selectedTypes.add(type);
    } else {
      this.selectedTypes.delete(type);
    }
    this.applyFilters();
  }

  applyFilters() {
    this.offset = 0;
    this.loadPokemons();
  }

  updatePaginationInfo() {
    this.currentStart = this.offset;
    this.currentEnd = Math.min(this.offset + this.limit, this.totalPokemons);
  }

  nextPage() {
    if (this.currentEnd < this.totalPokemons) {
      this.offset += this.limit;
      this.loadPokemons();
    }
  }

  previousPage() {
    if (this.offset > 0) {
      this.offset -= this.limit;
      this.loadPokemons();
    }
  }

  openPokemonDetail(id: number) {
    this.router.navigate(['/pokemon', id]);
  }



}
