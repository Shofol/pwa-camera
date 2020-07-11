import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupFieldsComponent } from './signup-fields.component';

describe('SignupFieldsComponent', () => {
  let component: SignupFieldsComponent;
  let fixture: ComponentFixture<SignupFieldsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignupFieldsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupFieldsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
