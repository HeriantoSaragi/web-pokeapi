(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "/4Dq":
/*!**********************************************************************!*\
  !*** ./src/app/detail-view-pokemon/detail-view-pokemon.component.ts ***!
  \**********************************************************************/
/*! exports provided: DetailViewPokemonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailViewPokemonComponent", function() { return DetailViewPokemonComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_pokemon_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/pokemon.service */ "V4cV");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");






function DetailViewPokemonComponent_div_0_span_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const type_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, type_r5.type.name));
} }
function DetailViewPokemonComponent_div_0_div_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "About");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Breeding");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Gender Ratio: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](19, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Species: ", ctx_r2.species == null ? null : ctx_r2.species.genera[7] == null ? null : ctx_r2.species.genera[7].genus, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Height: ", ctx_r2.pokemon.height / 10, " m");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Weight: ", ctx_r2.pokemon.weight / 10, " kg");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Abilities: ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](11, 7, ctx_r2.mappedAbilities), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx_r2.genderRatio, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Egg Groups: ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](19, 9, ctx_r2.eggGroups), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Hatch Steps: Approx. ", ctx_r2.hatchSteps, " steps");
} }
function DetailViewPokemonComponent_div_0_div_23_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const stat_r7 = ctx.$implicit;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 6, stat_r7.stat.name), ": ", stat_r7.base_stat, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", stat_r7.base_stat, "%")("background-color", ctx_r6.getStatColor(stat_r7.base_stat));
} }
function DetailViewPokemonComponent_div_0_div_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Base Stats");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, DetailViewPokemonComponent_div_0_div_23_div_3_Template, 6, 8, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r3.pokemon.stats);
} }
function DetailViewPokemonComponent_div_0_div_24_div_3_div_1_p_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const evolution_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Evolves into: ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, evolution_r10.evolves_to), "");
} }
function DetailViewPokemonComponent_div_0_div_24_div_3_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, DetailViewPokemonComponent_div_0_div_24_div_3_div_1_p_5_Template, 3, 3, "p", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const evolution_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 3, evolution_r10.species));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", evolution_r10.evolves_to);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Evolution level: ", evolution_r10.evolution_level || "N/A", "");
} }
function DetailViewPokemonComponent_div_0_div_24_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DetailViewPokemonComponent_div_0_div_24_div_3_div_1_Template, 8, 5, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r8.pokemonEvolution);
} }
function DetailViewPokemonComponent_div_0_div_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Evolution");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, DetailViewPokemonComponent_div_0_div_24_div_3_Template, 2, 1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.pokemonEvolution && ctx_r4.pokemonEvolution.length > 0);
} }
function DetailViewPokemonComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "i", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DetailViewPokemonComponent_div_0_Template_i_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r13.goBack(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, DetailViewPokemonComponent_div_0_span_11_Template, 3, 3, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DetailViewPokemonComponent_div_0_Template_button_click_15_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r15.selectTab("about"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "About");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DetailViewPokemonComponent_div_0_Template_button_click_17_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r16.selectTab("base-stats"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Base Stats");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DetailViewPokemonComponent_div_0_Template_button_click_19_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r17.selectTab("evolution"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Evolution");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, DetailViewPokemonComponent_div_0_div_22_Template, 22, 11, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, DetailViewPokemonComponent_div_0_div_23_Template, 4, 1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, DetailViewPokemonComponent_div_0_div_24_Template, 4, 1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("pokemon-detail-card ", ctx_r0.pokemon.types[0] == null ? null : ctx_r0.pokemon.types[0].type.name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 17, ctx_r0.pokemon.name));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("#", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](9, 19, ctx_r0.pokemon.id, "3.0"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.pokemon.types);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("alt", ctx_r0.pokemon.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r0.pokemon.sprites == null ? null : ctx_r0.pokemon.sprites.other["official-artwork"].front_default, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx_r0.selectedTab === "about");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx_r0.selectedTab === "base-stats");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx_r0.selectedTab === "evolution");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.selectedTab === "about");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.selectedTab === "base-stats");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.selectedTab === "evolution");
} }
class DetailViewPokemonComponent {
    constructor(route, pokemonService, location, sanitizer) {
        this.route = route;
        this.pokemonService = pokemonService;
        this.location = location;
        this.sanitizer = sanitizer;
        this.selectedTab = 'about';
        this.eggGroups = '';
        this.genderRatio = '';
        this.hatchSteps = 0;
        this.mappedAbilities = '';
    }
    ngOnInit() {
        const name = this.route.snapshot.paramMap.get('name');
        console.log(this.route.snapshot.paramMap);
        if (name) {
            this.getPokemonDetail(name);
            this.getPokemonSpecies(name);
            this.getPokemonEvolution(name);
        }
    }
    getPokemonDetail(name) {
        this.pokemonService.getPokemonDetail(name).subscribe(response => {
            this.pokemon = response;
            console.log(response);
            // Populate abilities
            this.mappedAbilities = this.mapAbilities(this.pokemon.abilities);
        });
    }
    getPokemonSpecies(name) {
        this.pokemonService.getPokemonSpecies(name).subscribe(response => {
            this.species = response;
            console.log('spe', this.species);
            // Calculate breeding info
            this.calculateBreedingInfo();
        });
    }
    getPokemonEvolution(name) {
        this.pokemonService.getPokemonEvolution(name).subscribe(response => {
            console.log('Raw Evolution Data:', response);
            this.pokemonEvolution = this.processEvolutionChain(response.chain);
            console.log('Processed Evolution Chain:', this.pokemonEvolution);
        });
    }
    processEvolutionChain(chain) {
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
    selectTab(tab) {
        this.selectedTab = tab;
    }
    calculateBreedingInfo() {
        if (this.species) {
            this.eggGroups = this.mapEggGroups(this.species.egg_groups);
            this.genderRatio = this.calculateGenderRatio(this.species.gender_rate);
            this.hatchSteps = this.calculateHatchSteps(this.species.hatch_counter);
        }
    }
    mapAbilities(abilities) {
        return abilities.map(ability => ability.ability.name).join(', ');
    }
    mapEggGroups(eggGroups) {
        console.log('telur', eggGroups);
        return eggGroups.map(group => group.name).join(', ');
    }
    calculateGenderRatio(genderRate) {
        if (genderRate < 0)
            return this.sanitizer.bypassSecurityTrustHtml('Genderless');
        const femaleRatio = (genderRate / 8) * 100;
        const maleRatio = 100 - femaleRatio;
        const femaleIcon = `<i class="fa fa-venus" style="color: #e91e63;"></i>`; // Pink female icon
        const maleIcon = `<i class="fa fa-mars" style="color: #2196f3;"></i>`; // Blue male icon
        const genderRatioHtml = `${femaleRatio}% ${femaleIcon}, ${maleRatio}% ${maleIcon}`;
        return this.sanitizer.bypassSecurityTrustHtml(genderRatioHtml);
    }
    calculateHatchSteps(hatchCounter) {
        const stepsPerCycle = 257;
        return hatchCounter * stepsPerCycle;
    }
    goBack() {
        this.location.back();
    }
    getStatColor(statValue) {
        return statValue >= 50 ? '#4caf50' : '#f44336'; // Green for >= 50, Red for < 50
    }
}
DetailViewPokemonComponent.ɵfac = function DetailViewPokemonComponent_Factory(t) { return new (t || DetailViewPokemonComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_pokemon_service__WEBPACK_IMPORTED_MODULE_2__["PokemonService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"])); };
DetailViewPokemonComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DetailViewPokemonComponent, selectors: [["app-detail-view-pokemon"]], decls: 1, vars: 1, consts: [[3, "class", 4, "ngIf"], [1, "back-button"], [1, "fas", "fa-arrow-left", 3, "click"], [1, "pokemon-header"], [1, "pokemon-id"], [1, "type-container"], ["class", "type", 4, "ngFor", "ngForOf"], [1, "pokemon-image-container"], [3, "src", "alt"], [1, "tabs"], [3, "click"], [1, "tab-content"], [4, "ngIf"], [1, "type"], [3, "innerHTML"], ["class", "stat-container", 4, "ngFor", "ngForOf"], [1, "stat-container"], [1, "stat-label"], [1, "progress-bar"], [1, "progress-bar-fill"], [4, "ngFor", "ngForOf"], [1, "evolution-card"]], template: function DetailViewPokemonComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, DetailViewPokemonComponent_div_0_Template, 25, 22, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.pokemon && ctx.pokemon.types && ctx.pokemon.types.length > 0);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["TitleCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["DecimalPipe"]], styles: [".pokemon-detail-card[_ngcontent-%COMP%] {\n  position: relative;\n  max-width: 500px;\n  margin: 20px auto;\n  padding: 20px;\n  border-radius: 15px;\n  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);\n  color: #fff;\n  overflow: hidden;\n  background: linear-gradient(to bottom, #f0f0f0 50%, #fff 50%);\n}\n.pokemon-detail-card.fire[_ngcontent-%COMP%] {\n  background: linear-gradient(to bottom, #F08030 50%, #fff 50%);\n}\n.pokemon-detail-card.water[_ngcontent-%COMP%] {\n  background: linear-gradient(to bottom, #6890F0 50%, #fff 50%);\n}\n.pokemon-detail-card.grass[_ngcontent-%COMP%] {\n  background: linear-gradient(to bottom, #78C850 50%, #fff 50%);\n}\n.pokemon-detail-card.electric[_ngcontent-%COMP%] {\n  background: linear-gradient(to bottom, #F8D030 50%, #fff 50%);\n}\n.pokemon-detail-card.ice[_ngcontent-%COMP%] {\n  background: linear-gradient(to bottom, #98D8D8 50%, #fff 50%);\n}\n.pokemon-detail-card.fighting[_ngcontent-%COMP%] {\n  background: linear-gradient(to bottom, #C03028 50%, #fff 50%);\n}\n.pokemon-detail-card.poison[_ngcontent-%COMP%] {\n  background: linear-gradient(to bottom, #A040A0 50%, #fff 50%);\n}\n.pokemon-detail-card.ground[_ngcontent-%COMP%] {\n  background: linear-gradient(to bottom, #E0C068 50%, #fff 50%);\n}\n.pokemon-detail-card.flying[_ngcontent-%COMP%] {\n  background: linear-gradient(to bottom, #A890F0 50%, #fff 50%);\n}\n.pokemon-detail-card.psychic[_ngcontent-%COMP%] {\n  background: linear-gradient(to bottom, #F85888 50%, #fff 50%);\n}\n.pokemon-detail-card.bug[_ngcontent-%COMP%] {\n  background: linear-gradient(to bottom, #A8B820 50%, #fff 50%);\n}\n.pokemon-detail-card.rock[_ngcontent-%COMP%] {\n  background: linear-gradient(to bottom, #B8A038 50%, #fff 50%);\n}\n.pokemon-detail-card.ghost[_ngcontent-%COMP%] {\n  background: linear-gradient(to bottom, #705898 50%, #fff 50%);\n}\n.pokemon-detail-card.dark[_ngcontent-%COMP%] {\n  background: linear-gradient(to bottom, #705848 50%, #fff 50%);\n}\n.pokemon-detail-card.dragon[_ngcontent-%COMP%] {\n  background: linear-gradient(to bottom, #7038F8 50%, #fff 50%);\n}\n.pokemon-detail-card.steel[_ngcontent-%COMP%] {\n  background: linear-gradient(to bottom, #B8B8D0 50%, #fff 50%);\n}\n.pokemon-detail-card.fairy[_ngcontent-%COMP%] {\n  background: linear-gradient(to bottom, #EE99AC 50%, #fff 50%);\n}\n.pokemon-detail-card.normal[_ngcontent-%COMP%] {\n  background: linear-gradient(to bottom, #A8A878 50%, #fff 50%);\n}\n.pokemon-detail-card[_ngcontent-%COMP%]   .back-button[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 20px;\n  left: 20px;\n  z-index: 10;\n}\n.pokemon-detail-card[_ngcontent-%COMP%]   .back-button[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  padding: 10px 20px;\n  background-color: #007bff;\n  color: white;\n  border: none;\n  border-radius: 5px;\n  cursor: pointer;\n}\n.pokemon-detail-card[_ngcontent-%COMP%]   .back-button[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background-color: #0056b3;\n}\n.pokemon-detail-card[_ngcontent-%COMP%]   .pokemon-header[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 60px;\n  left: 20px;\n  text-align: left;\n  z-index: 1;\n}\n.pokemon-detail-card[_ngcontent-%COMP%]   .pokemon-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.8rem;\n  color: inherit;\n}\n.pokemon-detail-card[_ngcontent-%COMP%]   .pokemon-header[_ngcontent-%COMP%]   .type-container[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 5px;\n}\n.pokemon-detail-card[_ngcontent-%COMP%]   .pokemon-header[_ngcontent-%COMP%]   .type-container[_ngcontent-%COMP%]   .type[_ngcontent-%COMP%] {\n  background-color: rgba(255, 255, 255, 0.2);\n  padding: 5px 10px;\n  border-radius: 10px;\n  font-size: 0.8rem;\n  text-transform: capitalize;\n  color: #fff;\n}\n.pokemon-detail-card[_ngcontent-%COMP%]   .pokemon-image-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: relative;\n  margin-top: 50px;\n}\n.pokemon-detail-card[_ngcontent-%COMP%]   .pokemon-image-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 180px;\n  height: auto;\n  position: relative;\n  z-index: 2;\n  margin-bottom: -20px;\n}\n.pokemon-detail-card[_ngcontent-%COMP%]   .tabs[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-around;\n  margin-top: 20px;\n}\n.pokemon-detail-card[_ngcontent-%COMP%]   .tabs[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 10px;\n  border: none;\n  background: transparent;\n  color: #fff;\n  font-weight: bold;\n  cursor: pointer;\n}\n.pokemon-detail-card[_ngcontent-%COMP%]   .tabs[_ngcontent-%COMP%]   button.active[_ngcontent-%COMP%] {\n  border-bottom: 2px solid #fff;\n}\n.pokemon-detail-card[_ngcontent-%COMP%]   .tab-content[_ngcontent-%COMP%] {\n  background-color: #fff;\n  color: #333;\n  border-radius: 15px;\n  padding: 20px;\n  margin-top: 15px;\n  min-height: 300px;\n  \n}\n.pokemon-detail-card[_ngcontent-%COMP%]   .evolution-section[_ngcontent-%COMP%] {\n  min-height: 200px;\n  \n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n}\n.pokemon-detail-card[_ngcontent-%COMP%]   .evolution-card[_ngcontent-%COMP%] {\n  background-color: #f9f9f9;\n  padding: 15px;\n  margin: 10px 0;\n  border-radius: 8px;\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);\n}\n.pokemon-detail-card[_ngcontent-%COMP%]   .evolution-card[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 1.2em;\n  margin-bottom: 10px;\n}\n.pokemon-detail-card[_ngcontent-%COMP%]   .evolution-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 1em;\n  margin: 5px 0;\n}\n.pokemon-detail-card[_ngcontent-%COMP%]   .evolution-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0;\n}\n.pokemon-detail-card[_ngcontent-%COMP%]   .evolution-section[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-top: 20px;\n  color: #333;\n  font-size: 1.2rem;\n}\n.pokemon-detail-card[_ngcontent-%COMP%]   .evolution-section[_ngcontent-%COMP%]   .evolution-card[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n.pokemon-detail-card[_ngcontent-%COMP%]   .stat-container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  margin-bottom: 10px;\n}\n.pokemon-detail-card[_ngcontent-%COMP%]   .stat-label[_ngcontent-%COMP%] {\n  width: 120px;\n  \n  font-weight: bold;\n}\n.pokemon-detail-card[_ngcontent-%COMP%]   .progress-bar[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 8px;\n  \n  background-color: #e0e0e0;\n  border-radius: 4px;\n  overflow: hidden;\n}\n.pokemon-detail-card[_ngcontent-%COMP%]   .progress-bar-fill[_ngcontent-%COMP%] {\n  height: 100%;\n  border-radius: 4px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGV0YWlsLXZpZXctcG9rZW1vbi9kZXRhaWwtdmlldy1wb2tlbW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXdCQTtFQUNJLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHlDQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsNkRBQUE7QUF2Qko7QUEyQlE7RUFDSSw2REFBQTtBQXpCWjtBQXdCUTtFQUNJLDZEQUFBO0FBdEJaO0FBcUJRO0VBQ0ksNkRBQUE7QUFuQlo7QUFrQlE7RUFDSSw2REFBQTtBQWhCWjtBQWVRO0VBQ0ksNkRBQUE7QUFiWjtBQVlRO0VBQ0ksNkRBQUE7QUFWWjtBQVNRO0VBQ0ksNkRBQUE7QUFQWjtBQU1RO0VBQ0ksNkRBQUE7QUFKWjtBQUdRO0VBQ0ksNkRBQUE7QUFEWjtBQUFRO0VBQ0ksNkRBQUE7QUFFWjtBQUhRO0VBQ0ksNkRBQUE7QUFLWjtBQU5RO0VBQ0ksNkRBQUE7QUFRWjtBQVRRO0VBQ0ksNkRBQUE7QUFXWjtBQVpRO0VBQ0ksNkRBQUE7QUFjWjtBQWZRO0VBQ0ksNkRBQUE7QUFpQlo7QUFsQlE7RUFDSSw2REFBQTtBQW9CWjtBQXJCUTtFQUNJLDZEQUFBO0FBdUJaO0FBeEJRO0VBQ0ksNkRBQUE7QUEwQlo7QUF0Qkk7RUFDSSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtBQXdCUjtBQXJCSTtFQUNJLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQXVCUjtBQXBCSTtFQUNJLHlCQUFBO0FBc0JSO0FBbkJJO0VBQ0ksa0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0VBQ0EsVUFBQTtBQXFCUjtBQW5CUTtFQUNJLFNBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUFxQlo7QUFsQlE7RUFDSSxhQUFBO0VBQ0EsUUFBQTtBQW9CWjtBQWxCWTtFQUNJLDBDQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsMEJBQUE7RUFDQSxXQUFBO0FBb0JoQjtBQWRJO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBZ0JSO0FBZFE7RUFDSSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLG9CQUFBO0FBZ0JaO0FBWEk7RUFDSSxhQUFBO0VBQ0EsNkJBQUE7RUFDQSxnQkFBQTtBQWFSO0FBWFE7RUFDSSxPQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUFhWjtBQVhZO0VBQ0ksNkJBQUE7QUFhaEI7QUFQSTtFQUNJLHNCQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSx5Q0FBQTtBQVNSO0FBTkk7RUFDSSxpQkFBQTtFQUNBLHNEQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBUVI7QUFMSTtFQUNJLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLHdDQUFBO0FBT1I7QUFKSTtFQUNJLGdCQUFBO0VBQ0EsbUJBQUE7QUFNUjtBQUhJO0VBQ0ksY0FBQTtFQUNBLGFBQUE7QUFLUjtBQUZJO0VBQ0ksZ0JBQUE7QUFJUjtBQUFJO0VBQ0ksa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtBQUVSO0FBQ0k7RUFDSSxtQkFBQTtBQUNSO0FBR0k7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBQURSO0FBSUk7RUFDSSxZQUFBO0VBQ0EsMkJBQUE7RUFDQSxpQkFBQTtBQUZSO0FBS0k7RUFDSSxXQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBSFI7QUFNSTtFQUNJLFlBQUE7RUFDQSxrQkFBQTtBQUpSIiwiZmlsZSI6InNyYy9hcHAvZGV0YWlsLXZpZXctcG9rZW1vbi9kZXRhaWwtdmlldy1wb2tlbW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJGJhY2tncm91bmRDb2xvcjogI2YwZjBmMDtcblxuLy8gV2FybmEgYmVyZGFzYXJrYW4gdGlwZSBQb2vDqW1vblxuJHR5cGVzOiAoXG4gICAgXCJmaXJlXCI6ICNGMDgwMzAsXG4gICAgXCJ3YXRlclwiOiAjNjg5MEYwLFxuICAgIFwiZ3Jhc3NcIjogIzc4Qzg1MCxcbiAgICBcImVsZWN0cmljXCI6ICNGOEQwMzAsXG4gICAgXCJpY2VcIjogIzk4RDhEOCxcbiAgICBcImZpZ2h0aW5nXCI6ICNDMDMwMjgsXG4gICAgXCJwb2lzb25cIjogI0EwNDBBMCxcbiAgICBcImdyb3VuZFwiOiAjRTBDMDY4LFxuICAgIFwiZmx5aW5nXCI6ICNBODkwRjAsXG4gICAgXCJwc3ljaGljXCI6ICNGODU4ODgsXG4gICAgXCJidWdcIjogI0E4QjgyMCxcbiAgICBcInJvY2tcIjogI0I4QTAzOCxcbiAgICBcImdob3N0XCI6ICM3MDU4OTgsXG4gICAgXCJkYXJrXCI6ICM3MDU4NDgsXG4gICAgXCJkcmFnb25cIjogIzcwMzhGOCxcbiAgICBcInN0ZWVsXCI6ICNCOEI4RDAsXG4gICAgXCJmYWlyeVwiOiAjRUU5OUFDLFxuICAgIFwibm9ybWFsXCI6ICNBOEE4Nzhcbik7XG5cbi5wb2tlbW9uLWRldGFpbC1jYXJkIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbWF4LXdpZHRoOiA1MDBweDtcbiAgICBtYXJnaW46IDIwcHggYXV0bztcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gICAgYm94LXNoYWRvdzogMCA0cHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAkYmFja2dyb3VuZENvbG9yIDUwJSwgI2ZmZiA1MCUpO1xuXG4gICAgLy8gRHluYW1pYyBiYWNrZ3JvdW5kIGdyYWRpZW50IGZvciBlYWNoIFBva8OpbW9uIHR5cGVcbiAgICBAZWFjaCAkdHlwZSwgJGNvbG9yIGluICR0eXBlcyB7XG4gICAgICAgICYuI3skdHlwZX0ge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgI3skY29sb3J9IDUwJSwgI2ZmZiA1MCUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLmJhY2stYnV0dG9uIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDIwcHg7IC8vIEFkanVzdCB0b3AgdmFsdWUgdG8gc3BhY2UgdGhlIGJ1dHRvbiBwcm9wZXJseVxuICAgICAgICBsZWZ0OiAyMHB4O1xuICAgICAgICB6LWluZGV4OiAxMDtcbiAgICB9XG5cbiAgICAuYmFjay1idXR0b24gYnV0dG9uIHtcbiAgICAgICAgcGFkZGluZzogMTBweCAyMHB4O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3YmZmO1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgfVxuXG4gICAgLmJhY2stYnV0dG9uIGJ1dHRvbjpob3ZlciB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDU2YjM7XG4gICAgfVxuXG4gICAgLnBva2Vtb24taGVhZGVyIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDYwcHg7IC8vIEFkanVzdCB0b3AgbWFyZ2luIHRvIGxlYXZlIHNwYWNlIGZvciB0aGUgQmFjayBidXR0b25cbiAgICAgICAgbGVmdDogMjBweDtcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgei1pbmRleDogMTtcblxuICAgICAgICBoMiB7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICBmb250LXNpemU6IDEuOHJlbTtcbiAgICAgICAgICAgIGNvbG9yOiBpbmhlcml0O1xuICAgICAgICB9XG5cbiAgICAgICAgLnR5cGUtY29udGFpbmVyIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBnYXA6IDVweDtcblxuICAgICAgICAgICAgLnR5cGUge1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiA1cHggMTBweDtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC44cmVtO1xuICAgICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gQWRqdXN0aW5nIHRoZSBQb2tlbW9uIGltYWdlIGNvbnRhaW5lciB0byBhY2NvbW1vZGF0ZSBjaGFuZ2VzIGluIGhlYWRlciBwb3NpdGlvbmluZ1xuICAgIC5wb2tlbW9uLWltYWdlLWNvbnRhaW5lciB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIG1hcmdpbi10b3A6IDUwcHg7IC8vIFNwYWNlIGZvciB0aGUgaGVhZGVyXG5cbiAgICAgICAgaW1nIHtcbiAgICAgICAgICAgIHdpZHRoOiAxODBweDtcbiAgICAgICAgICAgIGhlaWdodDogYXV0bztcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgIHotaW5kZXg6IDI7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAtMjBweDsgLy8gUG9zaXRpb25pbmcgdGhlIGZlZXQgaW5zaWRlIHRoZSBjYXJkXG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIC50YWJzIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XG5cbiAgICAgICAgYnV0dG9uIHtcbiAgICAgICAgICAgIGZsZXg6IDE7XG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuXG4gICAgICAgICAgICAmLmFjdGl2ZSB7XG4gICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNmZmY7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBFbnN1cmUgRXZvbHV0aW9uIHRhYiBjb250ZW50IHN0YXlzIGluIHBsYWNlIHdpdGggYSBmaXhlZCBoZWlnaHRcbiAgICAudGFiLWNvbnRlbnQge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgICAgICBjb2xvcjogIzMzMztcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgICAgICAgcGFkZGluZzogMjBweDtcbiAgICAgICAgbWFyZ2luLXRvcDogMTVweDtcbiAgICAgICAgbWluLWhlaWdodDogMzAwcHg7XG4gICAgICAgIC8qIEFkZCBhIG1pbmltdW0gaGVpZ2h0IGZvciBjb25zaXN0ZW5jeSAqL1xuICAgIH1cblxuICAgIC5ldm9sdXRpb24tc2VjdGlvbiB7XG4gICAgICAgIG1pbi1oZWlnaHQ6IDIwMHB4O1xuICAgICAgICAvKiBFbnN1cmUgdGhlIEV2b2x1dGlvbiBzZWN0aW9uIGhhcyBhIG1pbmltdW0gaGVpZ2h0ICovXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgfVxuXG4gICAgLmV2b2x1dGlvbi1jYXJkIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y5ZjlmOTtcbiAgICAgICAgcGFkZGluZzogMTVweDtcbiAgICAgICAgbWFyZ2luOiAxMHB4IDA7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICAgICAgYm94LXNoYWRvdzogMCA0cHggOHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgICB9XG5cbiAgICAuZXZvbHV0aW9uLWNhcmQgaDQge1xuICAgICAgICBmb250LXNpemU6IDEuMmVtO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgIH1cblxuICAgIC5ldm9sdXRpb24tY2FyZCBwIHtcbiAgICAgICAgZm9udC1zaXplOiAxZW07XG4gICAgICAgIG1hcmdpbjogNXB4IDA7XG4gICAgfVxuXG4gICAgLmV2b2x1dGlvbi1jYXJkIHA6bGFzdC1jaGlsZCB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgfVxuXG4gICAgLy8gU3R5bGluZyBmb3IgZXZvbHV0aW9uIHRhYiBjb250ZW50XG4gICAgLmV2b2x1dGlvbi1zZWN0aW9uIHAge1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgICAgIGNvbG9yOiAjMzMzO1xuICAgICAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgICB9XG5cbiAgICAuZXZvbHV0aW9uLXNlY3Rpb24gLmV2b2x1dGlvbi1jYXJkIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICB9XG5cbiAgICAvL2JhciBzdGF0XG4gICAgLnN0YXQtY29udGFpbmVyIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICB9XG5cbiAgICAuc3RhdC1sYWJlbCB7XG4gICAgICAgIHdpZHRoOiAxMjBweDtcbiAgICAgICAgLyogQWRqdXN0IHdpZHRoIGFzIG5lZWRlZCAqL1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICB9XG5cbiAgICAucHJvZ3Jlc3MtYmFyIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogOHB4O1xuICAgICAgICAvKiBUaGlubmVyIHByb2dyZXNzIGJhciAqL1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTBlMGUwO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgfVxuXG4gICAgLnByb2dyZXNzLWJhci1maWxsIHtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgfVxuXG4gICAgXG5cblxuXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DetailViewPokemonComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-detail-view-pokemon',
                templateUrl: './detail-view-pokemon.component.html',
                styleUrls: ['./detail-view-pokemon.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }, { type: _services_pokemon_service__WEBPACK_IMPORTED_MODULE_2__["PokemonService"] }, { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"] }, { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"] }]; }, null); })();


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/ptbadev/Documents/Laporan QT/File_Herianto Saragi/pokemon-app/src/main.ts */"zUnb");


/***/ }),

/***/ "122J":
/*!********************************************************!*\
  !*** ./src/app/home-pokemon/home-pokemon.component.ts ***!
  \********************************************************/
/*! exports provided: HomePokemonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePokemonComponent", function() { return HomePokemonComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_pokemon_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/pokemon.service */ "V4cV");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");






function HomePokemonComponent_div_6_label_1_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function HomePokemonComponent_div_6_label_1_Template_input_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r4.onTypeFilterChange($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const type_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", type_r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 2, type_r3), " ");
} }
function HomePokemonComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HomePokemonComponent_div_6_label_1_Template, 4, 4, "label", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.pokemonTypes);
} }
function HomePokemonComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomePokemonComponent_div_8_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const pokemon_r6 = ctx.$implicit; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.openPokemonDetail(pokemon_r6.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const pokemon_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("pokemon-card ", pokemon_r6.types[0].type.name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("alt", pokemon_r6.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", pokemon_r6.sprites.front_default, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 6, pokemon_r6.name));
} }
class HomePokemonComponent {
    constructor(pokemonService, router) {
        this.pokemonService = pokemonService;
        this.router = router;
        this.pokemons = [];
        this.offset = 0;
        this.limit = 21;
        this.totalPokemons = 0;
        this.currentStart = 0;
        this.currentEnd = 0;
        this.filteredPokemons = [];
        this.pokemonTypes = ['grass', 'fire', 'water', 'bug', 'normal', 'electric', 'ground', 'flying', 'psychic', 'rock', 'ice', 'ghost', 'dark', 'dragon', 'steel', 'fairy'];
        this.selectedTypes = new Set();
        this.showFilterDropdown = false;
    }
    ngOnInit() {
        this.loadPokemons();
    }
    loadPokemons() {
        // If a filter is applied, load only filtered Pokémon
        if (this.selectedTypes.size > 0) {
            this.filteredPokemons = this.pokemons.filter(pokemon => pokemon.types.some(typeInfo => this.selectedTypes.has(typeInfo.type.name)));
            this.totalPokemons = this.filteredPokemons.length;
            this.updatePaginationInfo();
        }
        else {
            // Load full data if no filter is applied
            this.pokemons = [];
            this.pokemonService.getPokemonList(this.limit, this.offset).subscribe((response) => {
                this.totalPokemons = response.count;
                response.results.forEach((result) => {
                    this.pokemonService.getPokemonDetail(result.name).subscribe((pokemonData) => {
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
    clickOutside(event) {
        const filterButton = document.querySelector('.filter-button');
        const filterDropdown = document.querySelector('.filter-dropdown');
        if (filterButton && filterDropdown) {
            if (!filterButton.contains(event.target) && !filterDropdown.contains(event.target)) {
                this.showFilterDropdown = false;
            }
        }
    }
    onTypeFilterChange(event) {
        const type = event.target.value;
        if (event.target.checked) {
            this.selectedTypes.add(type);
        }
        else {
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
    openPokemonDetail(id) {
        this.router.navigate(['/pokemon', id]);
    }
}
HomePokemonComponent.ɵfac = function HomePokemonComponent_Factory(t) { return new (t || HomePokemonComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_pokemon_service__WEBPACK_IMPORTED_MODULE_1__["PokemonService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
HomePokemonComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomePokemonComponent, selectors: [["app-home-pokemon"]], hostBindings: function HomePokemonComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomePokemonComponent_click_HostBindingHandler($event) { return ctx.clickOutside($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveDocument"]);
    } }, decls: 16, vars: 7, consts: [[1, "pokedex-header"], [1, "filter-container", 2, "display", "flex", "justify-content", "flex-end", "margin-bottom", "10px"], [1, "filter-button", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-sliders", 2, "margin-right", "5px"], ["class", "filter-dropdown", 4, "ngIf"], [1, "pokemon-container"], [3, "class", "click", 4, "ngFor", "ngForOf"], [1, "pagination", 2, "display", "flex", "justify-content", "center", "align-items", "center", "gap", "10px", "margin-top", "20px"], [3, "disabled", "click"], [1, "filter-dropdown"], [4, "ngFor", "ngForOf"], ["type", "checkbox", 3, "value", "change"], [3, "click"], [3, "src", "alt"]], template: function HomePokemonComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Pokedex");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomePokemonComponent_Template_button_click_3_listener() { return ctx.toggleFilterDropdown(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Filter ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, HomePokemonComponent_div_6_Template, 2, 1, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, HomePokemonComponent_div_8_Template, 5, 8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomePokemonComponent_Template_button_click_10_listener() { return ctx.previousPage(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Previous");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomePokemonComponent_Template_button_click_14_listener() { return ctx.nextPage(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Next");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showFilterDropdown);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.filteredPokemons);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.offset === 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"]("", ctx.currentStart + 1, " - ", ctx.currentEnd, " of ", ctx.totalPokemons, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.currentEnd >= ctx.totalPokemons);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["TitleCasePipe"]], styles: [".pokedex-header[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 2em;\n  margin-bottom: 20px;\n}\n\n.pokemon-container[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));\n  gap: 20px;\n  padding: 20px;\n  justify-items: center;\n}\n\n.pokemon-container[_ngcontent-%COMP%]   .pokemon-card[_ngcontent-%COMP%] {\n  width: 150px;\n  height: 200px;\n  border-radius: 10px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 10px;\n  color: #fff;\n  font-weight: bold;\n  text-align: center;\n  transition: transform 0.3s ease;\n}\n\n.pokemon-container[_ngcontent-%COMP%]   .pokemon-card[_ngcontent-%COMP%]:hover {\n  transform: scale(1.05);\n}\n\n.pokemon-container[_ngcontent-%COMP%]   .pokemon-card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100px;\n  height: 100px;\n  margin-bottom: 10px;\n}\n\n.pokemon-container[_ngcontent-%COMP%]   .pokemon-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\n.pokemon-card.fire[_ngcontent-%COMP%] {\n  background-color: #F08030;\n}\n\n.pokemon-card.water[_ngcontent-%COMP%] {\n  background-color: #6890F0;\n}\n\n.pokemon-card.grass[_ngcontent-%COMP%] {\n  background-color: #78C850;\n}\n\n.pokemon-card.electric[_ngcontent-%COMP%] {\n  background-color: #F8D030;\n}\n\n.pokemon-card.ice[_ngcontent-%COMP%] {\n  background-color: #98D8D8;\n}\n\n.pokemon-card.fighting[_ngcontent-%COMP%] {\n  background-color: #C03028;\n}\n\n.pokemon-card.poison[_ngcontent-%COMP%] {\n  background-color: #A040A0;\n}\n\n.pokemon-card.ground[_ngcontent-%COMP%] {\n  background-color: #E0C068;\n}\n\n.pokemon-card.flying[_ngcontent-%COMP%] {\n  background-color: #A890F0;\n}\n\n.pokemon-card.psychic[_ngcontent-%COMP%] {\n  background-color: #F85888;\n}\n\n.pokemon-card.bug[_ngcontent-%COMP%] {\n  background-color: #A8B820;\n}\n\n.pokemon-card.rock[_ngcontent-%COMP%] {\n  background-color: #B8A038;\n}\n\n.pokemon-card.ghost[_ngcontent-%COMP%] {\n  background-color: #705898;\n}\n\n.pokemon-card.dark[_ngcontent-%COMP%] {\n  background-color: #705848;\n}\n\n.pokemon-card.dragon[_ngcontent-%COMP%] {\n  background-color: #7038F8;\n}\n\n.pokemon-card.steel[_ngcontent-%COMP%] {\n  background-color: #B8B8D0;\n}\n\n.pokemon-card.fairy[_ngcontent-%COMP%] {\n  background-color: #EE99AC;\n}\n\n.pokemon-card.normal[_ngcontent-%COMP%] {\n  background-color: #A8A878;\n}\n\n.pagination[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 10px;\n  margin-top: 20px;\n}\n\n.pagination[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  padding: 8px 16px;\n  border: none;\n  border-radius: 5px;\n  font-size: 16px;\n  cursor: pointer;\n  transition: background-color 0.3s ease;\n  color: #fff;\n}\n\n.pagination[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:disabled {\n  cursor: not-allowed;\n  opacity: 0.5;\n}\n\n.pagination[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:not(:disabled):hover {\n  background-color: #333;\n}\n\n.pagination[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: bold;\n}\n\n.filter-button[_ngcontent-%COMP%] {\n  padding: 8px 12px;\n  background-color: #007bff;\n  color: white;\n  border: none;\n  border-radius: 4px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  font-size: 16px;\n}\n\n.filter-button[_ngcontent-%COMP%]:hover {\n  background-color: #0056b3;\n}\n\n.filter-dropdown[_ngcontent-%COMP%] {\n  position: absolute;\n  background-color: white;\n  border: 1px solid #ddd;\n  padding: 10px;\n  border-radius: 5px;\n  max-width: 200px;\n  z-index: 100;\n}\n\n.filter-dropdown[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  margin-bottom: 5px;\n}\n\n.filter-dropdown[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  margin-right: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS1wb2tlbW9uL2hvbWUtcG9rZW1vbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0FBQUo7O0FBR0U7RUFDRSxhQUFBO0VBQ0EsMkRBQUE7RUFDQSxTQUFBO0VBQ0EsYUFBQTtFQUNBLHFCQUFBO0FBQUo7O0FBRUk7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLCtCQUFBO0FBQU47O0FBRU07RUFDRSxzQkFBQTtBQUFSOztBQUdNO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQURSOztBQUlNO0VBQ0UsU0FBQTtBQUZSOztBQStCSTtFQUNFLHlCQXhCSTtBQUpWOztBQTJCSTtFQUNFLHlCQXhCSTtBQUFWOztBQXVCSTtFQUNFLHlCQXhCSTtBQUlWOztBQW1CSTtFQUNFLHlCQXhCSTtBQVFWOztBQWVJO0VBQ0UseUJBeEJJO0FBWVY7O0FBV0k7RUFDRSx5QkF4Qkk7QUFnQlY7O0FBT0k7RUFDRSx5QkF4Qkk7QUFvQlY7O0FBR0k7RUFDRSx5QkF4Qkk7QUF3QlY7O0FBREk7RUFDRSx5QkF4Qkk7QUE0QlY7O0FBTEk7RUFDRSx5QkF4Qkk7QUFnQ1Y7O0FBVEk7RUFDRSx5QkF4Qkk7QUFvQ1Y7O0FBYkk7RUFDRSx5QkF4Qkk7QUF3Q1Y7O0FBakJJO0VBQ0UseUJBeEJJO0FBNENWOztBQXJCSTtFQUNFLHlCQXhCSTtBQWdEVjs7QUF6Qkk7RUFDRSx5QkF4Qkk7QUFvRFY7O0FBN0JJO0VBQ0UseUJBeEJJO0FBd0RWOztBQWpDSTtFQUNFLHlCQXhCSTtBQTREVjs7QUFyQ0k7RUFDRSx5QkF4Qkk7QUFnRVY7O0FBbkNFO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQUFBO0VBQ0EsZ0JBQUE7QUFzQ0o7O0FBcENJO0VBQ0UsaUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLHNDQUFBO0VBQ0EsV0FBQTtBQXNDTjs7QUFwQ007RUFDRSxtQkFBQTtFQUNBLFlBQUE7QUFzQ1I7O0FBbkNNO0VBQ0Usc0JBQUE7QUFxQ1I7O0FBakNJO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0FBbUNOOztBQS9CRTtFQUNFLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUFrQ0o7O0FBL0JFO0VBQ0UseUJBQUE7QUFrQ0o7O0FBL0JFO0VBQ0Usa0JBQUE7RUFDQSx1QkFBQTtFQUNBLHNCQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0FBa0NKOztBQS9CRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBa0NKOztBQS9CRTtFQUNFLGlCQUFBO0FBa0NKIiwiZmlsZSI6InNyYy9hcHAvaG9tZS1wb2tlbW9uL2hvbWUtcG9rZW1vbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiBcbiAgLnBva2VkZXgtaGVhZGVyIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAyZW07XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cbiAgXG4gIC5wb2tlbW9uLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDE1MHB4LCAxZnIpKTtcbiAgICBnYXA6IDIwcHg7XG4gICAgcGFkZGluZzogMjBweDtcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG4gIFxuICAgIC5wb2tlbW9uLWNhcmQge1xuICAgICAgd2lkdGg6IDE1MHB4O1xuICAgICAgaGVpZ2h0OiAyMDBweDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICBjb2xvcjogI2ZmZjtcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgZWFzZTtcbiAgXG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcbiAgICAgIH1cbiAgXG4gICAgICBpbWcge1xuICAgICAgICB3aWR0aDogMTAwcHg7XG4gICAgICAgIGhlaWdodDogMTAwcHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICB9XG4gIFxuICAgICAgcCB7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgXG4gIC8vIFdhcm5hIGxhdGFyIGJlbGFrYW5nIHVudHVrIHNldGlhcCB0aXBlIFBva8OpbW9uXG4gICR0eXBlczogKFxuICAgIFwiZmlyZVwiOiAjRjA4MDMwLFxuICAgIFwid2F0ZXJcIjogIzY4OTBGMCxcbiAgICBcImdyYXNzXCI6ICM3OEM4NTAsXG4gICAgXCJlbGVjdHJpY1wiOiAjRjhEMDMwLFxuICAgIFwiaWNlXCI6ICM5OEQ4RDgsXG4gICAgXCJmaWdodGluZ1wiOiAjQzAzMDI4LFxuICAgIFwicG9pc29uXCI6ICNBMDQwQTAsXG4gICAgXCJncm91bmRcIjogI0UwQzA2OCxcbiAgICBcImZseWluZ1wiOiAjQTg5MEYwLFxuICAgIFwicHN5Y2hpY1wiOiAjRjg1ODg4LFxuICAgIFwiYnVnXCI6ICNBOEI4MjAsXG4gICAgXCJyb2NrXCI6ICNCOEEwMzgsXG4gICAgXCJnaG9zdFwiOiAjNzA1ODk4LFxuICAgIFwiZGFya1wiOiAjNzA1ODQ4LFxuICAgIFwiZHJhZ29uXCI6ICM3MDM4RjgsXG4gICAgXCJzdGVlbFwiOiAjQjhCOEQwLFxuICAgIFwiZmFpcnlcIjogI0VFOTlBQyxcbiAgICBcIm5vcm1hbFwiOiAjQThBODc4XG4gICk7XG4gIFxuICAvLyBNZW5nZ3VuYWthbiBsb29wIHVudHVrIG1lbmdoYXNpbGthbiBnYXlhIGJlcmRhc2Fya2FuIHRpcGVcbiAgQGVhY2ggJHR5cGUsICRjb2xvciBpbiAkdHlwZXMge1xuICAgIC5wb2tlbW9uLWNhcmQuI3skdHlwZX0ge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yO1xuICAgIH1cbiAgfVxuICBcbiAgLy8gR2F5YSBwYWdpbmF0aW9uXG4gIC5wYWdpbmF0aW9uIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiAxMHB4O1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gIFxuICAgIGJ1dHRvbiB7XG4gICAgICBwYWRkaW5nOiA4cHggMTZweDtcbiAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4zcyBlYXNlO1xuICAgICAgY29sb3I6ICNmZmY7XG4gIFxuICAgICAgJjpkaXNhYmxlZCB7XG4gICAgICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XG4gICAgICAgIG9wYWNpdHk6IDAuNTtcbiAgICAgIH1cbiAgXG4gICAgICAmOm5vdCg6ZGlzYWJsZWQpOmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzMzMztcbiAgICAgIH1cbiAgICB9XG4gIFxuICAgIHNwYW4ge1xuICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgfVxuICB9XG4gIFxuICAuZmlsdGVyLWJ1dHRvbiB7XG4gICAgcGFkZGluZzogOHB4IDEycHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwN2JmZjtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgfVxuICBcbiAgLmZpbHRlci1idXR0b246aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDU2YjM7XG4gIH1cbiAgXG4gIC5maWx0ZXItZHJvcGRvd24ge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIG1heC13aWR0aDogMjAwcHg7XG4gICAgei1pbmRleDogMTAwO1xuICB9XG4gIFxuICAuZmlsdGVyLWRyb3Bkb3duIGxhYmVsIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICB9XG4gIFxuICAuZmlsdGVyLWRyb3Bkb3duIGlucHV0IHtcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgfVxuICAiXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomePokemonComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home-pokemon',
                templateUrl: './home-pokemon.component.html',
                styleUrls: ['./home-pokemon.component.scss']
            }]
    }], function () { return [{ type: _services_pokemon_service__WEBPACK_IMPORTED_MODULE_1__["PokemonService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, { clickOutside: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['document:click', ['$event']]
        }] }); })();


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



class AppComponent {
    constructor() {
        this.title = 'pokemon-app';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], null, null); })();


/***/ }),

/***/ "V4cV":
/*!*********************************************!*\
  !*** ./src/app/services/pokemon.service.ts ***!
  \*********************************************/
/*! exports provided: PokemonService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PokemonService", function() { return PokemonService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



class PokemonService {
    constructor(http) {
        this.http = http;
        this.apiUrl = 'https://pokeapi.co/api/v2';
    }
    getPokemonList(limit, offset) {
        return this.http.get(`${this.apiUrl}/pokemon?limit=${limit}&offset=${offset}`);
    }
    getPokemonDetail(name) {
        return this.http.get(`${this.apiUrl}/pokemon/${name}`);
    }
    getPokemonSpecies(name) {
        return this.http.get(`${this.apiUrl}/pokemon-species/${name}`);
    }
    getPokemonEvolution(name) {
        return this.http.get(`${this.apiUrl}/evolution-chain/${name}`);
    }
}
PokemonService.ɵfac = function PokemonService_Factory(t) { return new (t || PokemonService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
PokemonService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: PokemonService, factory: PokemonService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PokemonService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _home_pokemon_home_pokemon_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home-pokemon/home-pokemon.component */ "122J");
/* harmony import */ var _detail_view_pokemon_detail_view_pokemon_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./detail-view-pokemon/detail-view-pokemon.component */ "/4Dq");









class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
        _home_pokemon_home_pokemon_component__WEBPACK_IMPORTED_MODULE_6__["HomePokemonComponent"],
        _detail_view_pokemon_detail_view_pokemon_component__WEBPACK_IMPORTED_MODULE_7__["DetailViewPokemonComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                    _home_pokemon_home_pokemon_component__WEBPACK_IMPORTED_MODULE_6__["HomePokemonComponent"],
                    _detail_view_pokemon_detail_view_pokemon_component__WEBPACK_IMPORTED_MODULE_7__["DetailViewPokemonComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                    _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _home_pokemon_home_pokemon_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home-pokemon/home-pokemon.component */ "122J");
/* harmony import */ var _detail_view_pokemon_detail_view_pokemon_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./detail-view-pokemon/detail-view-pokemon.component */ "/4Dq");






const routes = [
    { path: '', component: _home_pokemon_home_pokemon_component__WEBPACK_IMPORTED_MODULE_2__["HomePokemonComponent"] },
    { path: 'pokemon/:name', component: _detail_view_pokemon_detail_view_pokemon_component__WEBPACK_IMPORTED_MODULE_3__["DetailViewPokemonComponent"] }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map