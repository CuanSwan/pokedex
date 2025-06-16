import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemovesComponent } from './pokemoves.component';

describe('PokemovesComponent', () => {
  let component: PokemovesComponent;
  let fixture: ComponentFixture<PokemovesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PokemovesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PokemovesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
