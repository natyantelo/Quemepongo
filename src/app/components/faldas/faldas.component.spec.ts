import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FaldasComponent } from './faldas.component';

describe('FaldasComponent', () => {
  let component: FaldasComponent;
  let fixture: ComponentFixture<FaldasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FaldasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FaldasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
