import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChaquetasyabrigosComponent } from './chaquetasyabrigos.component';

describe('ChaquetasyabrigosComponent', () => {
  let component: ChaquetasyabrigosComponent;
  let fixture: ComponentFixture<ChaquetasyabrigosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChaquetasyabrigosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChaquetasyabrigosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
