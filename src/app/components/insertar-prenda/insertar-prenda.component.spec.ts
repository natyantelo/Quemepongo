import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertarPrendaComponent } from './insertar-prenda.component';

describe('InsertarPrendaComponent', () => {
  let component: InsertarPrendaComponent;
  let fixture: ComponentFixture<InsertarPrendaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsertarPrendaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertarPrendaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
