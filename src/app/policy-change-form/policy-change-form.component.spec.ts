import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PolicyChangeFormComponent } from './policy-change-form.component';

describe('PolicyChangeFormComponent', () => {
  let component: PolicyChangeFormComponent;
  let fixture: ComponentFixture<PolicyChangeFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PolicyChangeFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PolicyChangeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
