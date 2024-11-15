import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private apiUrl = 'https://pokeapi.co/api/v2';

  constructor(private http: HttpClient) { }

  getPokemonList(limit: number, offset: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/pokemon?limit=${limit}&offset=${offset}`);
  }

  getPokemonDetail(name: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/pokemon/${name}`);
  }

  getPokemonSpecies(name: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/pokemon-species/${name}`);
  }
  getPokemonEvolution(name: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/evolution-chain/${name}`);
  }

}
