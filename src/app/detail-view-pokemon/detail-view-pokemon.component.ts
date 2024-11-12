import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonService } from '../services/pokemon.service';
import { Location } from '@angular/common';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-detail-view-pokemon',
  templateUrl: './detail-view-pokemon.component.html',
  styleUrls: ['./detail-view-pokemon.component.scss']
})
export class DetailViewPokemonComponent implements OnInit {

  pokemon: any;
  species: any;
  selectedTab: string = 'about';
  eggGroups: string = '';
  genderRatio: SafeHtml = '';
  hatchSteps: number = 0;
  mappedAbilities: string = '';
  pokemonEvolution: any[];

  constructor(
    private route: ActivatedRoute,
    private pokemonService: PokemonService,
    private location: Location,
    private sanitizer: DomSanitizer

  ) { }

  ngOnInit(): void {
    const name = this.route.snapshot.paramMap.get('name');
    console.log(this.route.snapshot.paramMap);

    if (name) {
      this.getPokemonDetail(name);
      this.getPokemonSpecies(name);
      this.getPokemonEvolution(name);
    }
  }

  getPokemonDetail(name: string) {
    this.pokemonService.getPokemonDetail(name).subscribe(response => {
      this.pokemon = response;
      console.log(response);

      // Populate abilities
      this.mappedAbilities = this.mapAbilities(this.pokemon.abilities);
    });
  }

  getPokemonSpecies(name: string) {
    this.pokemonService.getPokemonSpecies(name).subscribe(response => {
      this.species = response;
      console.log('spe', this.species);

      // Calculate breeding info
      this.calculateBreedingInfo();
    });
  }

  getPokemonEvolution(name: string): void {
    this.pokemonService.getPokemonEvolution(name).subscribe(response => {
      console.log('Raw Evolution Data:', response);

      this.pokemonEvolution = this.processEvolutionChain(response.chain);
      console.log('Processed Evolution Chain:', this.pokemonEvolution);
    });
  }


  processEvolutionChain(chain: any): any[] {
    const evolutionList = [];

    const traverseChain = (node, level = 1) => {
      evolutionList.push({
        species: node.species.name,
        evolves_to: node.evolves_to.length ? node.evolves_to[0].species.name : null,
        evolution_level: node.evolution_details.length ? node.evolution_details[0].min_level : null,
      });
      if (node.evolves_to && node.evolves_to.length > 0) {
        traverseChain(node.evolves_to[0], level + 1);
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
    console.log('telur', eggGroups);
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

  getStatColor(statValue: number): string {
    return statValue >= 50 ? '#4caf50' : '#f44336';  // Green for >= 50, Red for < 50
  }


}
