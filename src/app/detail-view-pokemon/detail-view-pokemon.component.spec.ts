import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailViewPokemonComponent } from './detail-view-pokemon.component';

describe('DetailViewPokemonComponent', () => {
  let component: DetailViewPokemonComponent;
  let fixture: ComponentFixture<DetailViewPokemonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailViewPokemonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailViewPokemonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
