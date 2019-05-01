import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JerseisComponent } from './jerseis.component';

describe('JerseisComponent', () => {
  let component: JerseisComponent;
  let fixture: ComponentFixture<JerseisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JerseisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JerseisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
