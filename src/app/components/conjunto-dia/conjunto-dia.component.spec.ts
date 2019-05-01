import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConjuntoDiaComponent } from './conjunto-dia.component';

describe('ConjuntoDiaComponent', () => {
  let component: ConjuntoDiaComponent;
  let fixture: ComponentFixture<ConjuntoDiaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConjuntoDiaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConjuntoDiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
