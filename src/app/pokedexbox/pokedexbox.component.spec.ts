import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokedexboxComponent } from './pokedexbox.component';

describe('PokedexboxComponent', () => {
  let component: PokedexboxComponent;
  let fixture: ComponentFixture<PokedexboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PokedexboxComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PokedexboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
