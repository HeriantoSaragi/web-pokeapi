import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePokemonComponent } from './home-pokemon/home-pokemon.component';
import { DetailViewPokemonComponent } from './detail-view-pokemon/detail-view-pokemon.component';

const routes: Routes = [
  { path: '', component: HomePokemonComponent },
  { path: 'pokemon/:name', component: DetailViewPokemonComponent  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
