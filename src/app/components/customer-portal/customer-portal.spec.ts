import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerPortal } from './customer-portal';

describe('CustomerPortal', () => {
  let component: CustomerPortal;
  let fixture: ComponentFixture<CustomerPortal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomerPortal]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerPortal);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
