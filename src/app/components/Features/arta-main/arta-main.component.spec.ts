import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ARTAMainComponent } from './arta-main.component';

describe('ARTAMainComponent', () => {
  let component: ARTAMainComponent;
  let fixture: ComponentFixture<ARTAMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ARTAMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ARTAMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
