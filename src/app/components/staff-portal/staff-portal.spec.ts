import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffPortal } from './staff-portal';

describe('StaffPortal', () => {
  let component: StaffPortal;
  let fixture: ComponentFixture<StaffPortal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StaffPortal]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StaffPortal);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
