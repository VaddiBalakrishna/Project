import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllCustomerComponent } from './all-customers.component';

describe('AllMembersComponent', () => {
  let component: AllCustomerComponent;
  let fixture: ComponentFixture<AllCustomerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllCustomerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
