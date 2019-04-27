import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MisPrendasComponent } from './mis-prendas.component';

describe('MisPrendasComponent', () => {
  let component: MisPrendasComponent;
  let fixture: ComponentFixture<MisPrendasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MisPrendasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MisPrendasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
