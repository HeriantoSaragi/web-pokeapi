import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonService } from '../services/pokemon.service';
import { Location } from '@angular/common';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
    selector: 'app-detail-view-pokemon',
    templateUrl: './detail-view-pokemon.component.html',
    styleUrls: ['./detail-view-pokemon.component.scss'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class DetailViewPokemonComponent implements OnInit {

  pokemon: any;
  species: any;
  selectedTab: string = 'about';
  eggGroups: string = '';
  genderRatio: SafeHtml = '';
  hatchSteps: number = 0;
  mappedAbilities: string = '';
  speciesGenus: string = '';
  pokemonEvolution: any[] = [];
  loadingEvolution = false;

  readonly statLabels: Record<string, string> = {
    hp: 'HP',
    attack: 'Attack',
    defense: 'Defense',
    'special-attack': 'Sp. Atk',
    'special-defense': 'Sp. Def',
    speed: 'Speed'
  };

  constructor(
    private route: ActivatedRoute,
    private pokemonService: PokemonService,
    private location: Location,
    private sanitizer: DomSanitizer

  ) { }

  ngOnInit(): void {
    const name = this.route.snapshot.paramMap.get('name');

    if (name) {
      this.getPokemonDetail(name);
      this.getPokemonSpecies(name);
    }
  }

  getPokemonDetail(name: string) {
    this.pokemonService.getPokemonDetail(name).subscribe(response => {
      this.pokemon = response;
      this.mappedAbilities = this.mapAbilities(this.pokemon.abilities);
    });
  }

  getPokemonSpecies(name: string) {
    this.pokemonService.getPokemonSpecies(name).subscribe(response => {
      this.species = response;
      this.speciesGenus = this.species.genera?.find((g: any) => g.language.name === 'en')?.genus || '';
      this.calculateBreedingInfo();

      const evolutionChainUrl: string | undefined = this.species?.evolution_chain?.url;
      const chainId = evolutionChainUrl?.match(/\/evolution-chain\/(\d+)\//)?.[1];
      if (chainId) {
        this.getPokemonEvolution(chainId);
      }
    });
  }

  getPokemonEvolution(chainId: string): void {
    this.loadingEvolution = true;
    this.pokemonService.getPokemonEvolution(chainId).subscribe(response => {
      const stages = this.processEvolutionChain(response.chain);
      this.pokemonEvolution = stages;
      this.loadingEvolution = false;

      stages.forEach(stage => {
        this.pokemonService.getPokemonDetail(stage.species).subscribe((data: any) => {
          stage.sprite = data?.sprites?.front_default;
        });
      });
    });
  }


  processEvolutionChain(chain: any): any[] {
    const evolutionList: any[] = [];

    const traverseChain = (node: any) => {
      evolutionList.push({
        species: node.species.name,
        evolves_to: node.evolves_to.length ? node.evolves_to[0].species.name : null,
        evolution_level: node.evolution_details.length ? node.evolution_details[0].min_level : null,
        sprite: null
      });
      if (node.evolves_to && node.evolves_to.length > 0) {
        traverseChain(node.evolves_to[0]);
      }
    };

    traverseChain(chain);
    return evolutionList;
  }


  selectTab(tab: string) {
    this.selectedTab = tab;
  }

  calculateBreedingInfo() {
    if (this.species) {
      this.eggGroups = this.mapEggGroups(this.species.egg_groups);
      this.genderRatio = this.calculateGenderRatio(this.species.gender_rate);
      this.hatchSteps = this.calculateHatchSteps(this.species.hatch_counter);
    }
  }

  mapAbilities(abilities: any[]): string {
    return abilities.map(ability => ability.ability.name).join(', ');
  }

  mapEggGroups(eggGroups: any[]): string {
    return eggGroups.map(group => group.name).join(', ');
  }

  calculateGenderRatio(genderRate: number): SafeHtml {
    if (genderRate < 0) return this.sanitizer.bypassSecurityTrustHtml('Genderless');

    const femaleRatio = (genderRate / 8) * 100;
    const maleRatio = 100 - femaleRatio;

    const femaleIcon = `<i class="fa fa-venus" style="color: #e91e63;"></i>`;  // Pink female icon
    const maleIcon = `<i class="fa fa-mars" style="color: #2196f3;"></i>`;    // Blue male icon

    const genderRatioHtml = `${femaleRatio}% ${femaleIcon}, ${maleRatio}% ${maleIcon}`;
    return this.sanitizer.bypassSecurityTrustHtml(genderRatioHtml);
  }


  calculateHatchSteps(hatchCounter: number): number {
    const stepsPerCycle = 257;
    return hatchCounter * stepsPerCycle;
  }

  goBack() {
    this.location.back();
  }

  getStatLabel(statName: string): string {
    return this.statLabels[statName] || statName;
  }

  getStatColor(statValue: number): string {
    if (statValue >= 100) return '#2ecc71';
    if (statValue >= 60) return '#f1c40f';
    return '#e74c3c';
  }

}
