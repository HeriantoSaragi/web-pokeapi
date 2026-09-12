# web-pokeapi
Front End Test use Poke Api
# PokemonApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.2.4, and later upgraded to Angular 22.

**Live demo:** https://heriantosaragi.github.io/web-pokeapi/

## Features

- Browse Pokémon with a responsive, paginated grid (page size adapts to screen width)
- Search Pokémon by name across the full Pokédex
- Filter by type (multi-select) across the full Pokédex, not just the current page
- Pokémon detail page with About, Base Stats, and Evolution Chain tabs

## Requirements

- Node.js `^22.22.3 || ^24.15.0 || >=26.0.0` (required by Angular CLI 22)
- If your system Node is older, a portable Node build is available under `.tools/` — run `.\run-local.ps1` (PowerShell) to start the dev server using it automatically.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use `ng build --configuration production` for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Vitest](https://vitest.dev).

## Deployment

Every push to `main` is automatically built and deployed to GitHub Pages via the workflow in `.github/workflows/deploy.yml`. It builds with `--base-href /web-pokeapi/` (required since this is a project page, not a user/org page) and adds a `404.html` fallback so client-side routes (e.g. `/pokemon/pikachu`) work on direct navigation or refresh.

This only needs a one-time setup in the repo: **Settings > Pages > Source: GitHub Actions**.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/cli) page.
