import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokestatsComponent } from './pokestats.component';

describe('PokestatsComponent', () => {
  let component: PokestatsComponent;
  let fixture: ComponentFixture<PokestatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PokestatsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PokestatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
