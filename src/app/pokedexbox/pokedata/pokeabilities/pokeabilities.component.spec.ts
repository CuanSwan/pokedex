import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokeabilitiesComponent } from './pokeabilities.component';

describe('PokeabilitiesComponent', () => {
  let component: PokeabilitiesComponent;
  let fixture: ComponentFixture<PokeabilitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PokeabilitiesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PokeabilitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
