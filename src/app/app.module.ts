import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { provideHttpClient, withInterceptorsFromDi, withXhr } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { HomePokemonComponent } from './home-pokemon/home-pokemon.component';
import { DetailViewPokemonComponent } from './detail-view-pokemon/detail-view-pokemon.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePokemonComponent,
    DetailViewPokemonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule
  ],
  providers: [provideHttpClient(withXhr(), withInterceptorsFromDi())],
  bootstrap: [AppComponent]
})
export class AppModule { }
