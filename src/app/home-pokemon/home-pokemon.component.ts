import { Component, OnInit, ChangeDetectionStrategy, HostListener } from '@angular/core';
import { PokemonService } from '../services/pokemon.service';
import { Router } from '@angular/router';
import { forkJoin, Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

interface PokemonRef {
  name: string;
  url: string;
}

@Component({
    selector: 'app-home-pokemon',
    templateUrl: './home-pokemon.component.html',
    styleUrls: ['./home-pokemon.component.scss'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
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
  pageSizeOptions: number[] = [12, 21, 42, 60];
  searchTerm: string = '';
  loading = false;

  private allPokemonNames: PokemonRef[] | null = null;
  private typeNameCache = new Map<string, Set<string>>();
  private searchDebounce: any;
  private resizeDebounce: any;
  private manualPageSize = false;
  private loadRequestId = 0;

  constructor(
    private pokemonService: PokemonService,
    private router: Router
  ) { }


  ngOnInit() {
    this.limit = this.computeResponsiveLimit();
    this.loadPokemons();
  }

  @HostListener('window:resize')
  onWindowResize() {
    if (this.manualPageSize) {
      return;
    }
    clearTimeout(this.resizeDebounce);
    this.resizeDebounce = setTimeout(() => {
      // Re-check here, not just when the resize event fired: a manual page-size
      // pick can happen while this callback is still pending.
      if (this.manualPageSize) {
        return;
      }
      const newLimit = this.computeResponsiveLimit();
      if (newLimit !== this.limit) {
        this.limit = newLimit;
        this.offset = 0;
        this.loadPokemons();
      }
    }, 250);
  }

  private computeResponsiveLimit(): number {
    const width = typeof window !== 'undefined' ? window.innerWidth : 1280;
    const cardSlot = 170; // approx card width (150px) + grid gap (20px)
    const columns = Math.max(1, Math.floor(width / cardSlot));
    const rows = width < 480 ? 5 : 3;
    const ideal = columns * rows;
    // Snap to one of pageSizeOptions so the "per page" dropdown always
    // reflects the value actually in use.
    return this.pageSizeOptions.reduce((closest, option) =>
      Math.abs(option - ideal) < Math.abs(closest - ideal) ? option : closest
    );
  }

  loadPokemons() {
    const requestId = ++this.loadRequestId;
    this.pokemons = [];
    this.filteredPokemons = [];
    this.loading = true;

    if (!this.allPokemonNames) {
      this.pokemonService.getAllPokemonNames().subscribe((response: any) => {
        this.allPokemonNames = response.results;
        this.resolveCandidates(requestId);
      });
    } else {
      this.resolveCandidates(requestId);
    }
  }

  private resolveCandidates(requestId: number) {
    this.getCandidateNames$().subscribe(candidates => {
      if (requestId !== this.loadRequestId) {
        return; // a newer request superseded this one
      }

      const term = this.searchTerm.trim().toLowerCase();
      const matched = term ? candidates.filter(p => p.name.includes(term)) : candidates;

      this.totalPokemons = matched.length;
      this.updatePaginationInfo();

      const pageItems = matched.slice(this.offset, this.offset + this.limit);
      this.loading = false;

      if (pageItems.length === 0) {
        this.filteredPokemons = [];
        return;
      }

      pageItems.forEach(item => {
        this.pokemonService.getPokemonDetail(item.name).subscribe((pokemonData: any) => {
          if (requestId !== this.loadRequestId) {
            return;
          }
          this.pokemons.push(pokemonData);
          this.filteredPokemons = [...this.pokemons];
        });
      });
    });
  }

  private getCandidateNames$(): Observable<PokemonRef[]> {
    const allNames = this.allPokemonNames || [];

    if (this.selectedTypes.size === 0) {
      return of(allNames);
    }

    const typesToFetch = Array.from(this.selectedTypes).filter(type => !this.typeNameCache.has(type));
    const fetch$ = typesToFetch.length
      ? forkJoin(typesToFetch.map(type =>
          this.pokemonService.getPokemonsByType(type).pipe(
            map((res: any) => ({
              type,
              names: new Set<string>(res.pokemon.map((p: any) => p.pokemon.name as string))
            }))
          )
        ))
      : of([]);

    return fetch$.pipe(
      map((results: { type: string; names: Set<string> }[]) => {
        results.forEach(result => this.typeNameCache.set(result.type, result.names));

        const unionNames = new Set<string>();
        this.selectedTypes.forEach(type => {
          this.typeNameCache.get(type)?.forEach(name => unionNames.add(name));
        });

        return allNames.filter(pokemon => unionNames.has(pokemon.name));
      })
    );
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

  isTypeSelected(type: string): boolean {
    return this.selectedTypes.has(type);
  }

  removeTypeFilter(type: string) {
    this.selectedTypes.delete(type);
    this.applyFilters();
  }

  clearTypeFilters() {
    this.selectedTypes.clear();
    this.applyFilters();
  }

  applyFilters() {
    this.offset = 0;
    this.loadPokemons();
  }

  onSearchChange(event: any) {
    this.searchTerm = event.target.value;
    clearTimeout(this.searchDebounce);
    this.searchDebounce = setTimeout(() => {
      this.offset = 0;
      this.loadPokemons();
    }, 350);
  }

  clearSearch() {
    this.searchTerm = '';
    clearTimeout(this.searchDebounce);
    this.offset = 0;
    this.loadPokemons();
  }

  updatePaginationInfo() {
    this.currentStart = this.offset;
    this.currentEnd = Math.min(this.offset + this.limit, this.totalPokemons);
  }

  get totalPages(): number {
    return Math.max(1, Math.ceil(this.totalPokemons / this.limit));
  }

  get currentPage(): number {
    return Math.floor(this.offset / this.limit) + 1;
  }

  get pageNumbers(): number[] {
    const delta = 2;
    const start = Math.max(1, this.currentPage - delta);
    const end = Math.min(this.totalPages, this.currentPage + delta);
    const pages: number[] = [];
    for (let page = start; page <= end; page++) {
      pages.push(page);
    }
    return pages;
  }

  goToPage(page: number) {
    if (page < 1 || page > this.totalPages || page === this.currentPage) {
      return;
    }
    this.offset = (page - 1) * this.limit;
    this.loadPokemons();
  }

  nextPage() {
    this.goToPage(this.currentPage + 1);
  }

  previousPage() {
    this.goToPage(this.currentPage - 1);
  }

  onPageSizeChange(event: any) {
    this.manualPageSize = true;
    clearTimeout(this.resizeDebounce);
    this.limit = Number(event.target.value);
    this.offset = 0;
    this.loadPokemons();
  }

  openPokemonDetail(id: number) {
    this.router.navigate(['/pokemon', id]);
  }

}
