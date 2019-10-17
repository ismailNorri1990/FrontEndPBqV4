import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormConseillerComponent } from './form-conseiller.component';

describe('FormConseillerComponent', () => {
  let component: FormConseillerComponent;
  let fixture: ComponentFixture<FormConseillerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormConseillerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormConseillerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
