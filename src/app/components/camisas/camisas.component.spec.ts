import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CamisasComponent } from './camisas.component';

describe('CamisasComponent', () => {
  let component: CamisasComponent;
  let fixture: ComponentFixture<CamisasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CamisasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CamisasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
