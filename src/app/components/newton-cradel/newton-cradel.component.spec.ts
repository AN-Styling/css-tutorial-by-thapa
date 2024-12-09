import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewtonCradelComponent } from './newton-cradel.component';

describe('NewtonCradelComponent', () => {
  let component: NewtonCradelComponent;
  let fixture: ComponentFixture<NewtonCradelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewtonCradelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewtonCradelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
