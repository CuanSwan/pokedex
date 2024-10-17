import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokedataComponent } from './pokedata.component';

describe('PokedataComponent', () => {
  let component: PokedataComponent;
  let fixture: ComponentFixture<PokedataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PokedataComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PokedataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
