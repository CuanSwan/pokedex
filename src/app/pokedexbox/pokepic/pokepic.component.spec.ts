import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokepicComponent } from './pokepic.component';

describe('PokepicComponent', () => {
  let component: PokepicComponent;
  let fixture: ComponentFixture<PokepicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PokepicComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PokepicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
