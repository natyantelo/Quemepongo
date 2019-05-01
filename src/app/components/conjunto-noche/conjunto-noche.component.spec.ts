import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConjuntoNocheComponent } from './conjunto-noche.component';

describe('ConjuntoNocheComponent', () => {
  let component: ConjuntoNocheComponent;
  let fixture: ComponentFixture<ConjuntoNocheComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConjuntoNocheComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConjuntoNocheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
