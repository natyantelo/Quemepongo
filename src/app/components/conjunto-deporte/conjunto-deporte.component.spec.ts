import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConjuntoDeporteComponent } from './conjunto-deporte.component';

describe('ConjuntoDeporteComponent', () => {
  let component: ConjuntoDeporteComponent;
  let fixture: ComponentFixture<ConjuntoDeporteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConjuntoDeporteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConjuntoDeporteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
