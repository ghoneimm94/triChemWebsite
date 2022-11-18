import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerCertificatesComponent } from './customer-certificates.component';

describe('CustomerCertificatesComponent', () => {
  let component: CustomerCertificatesComponent;
  let fixture: ComponentFixture<CustomerCertificatesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerCertificatesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerCertificatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
