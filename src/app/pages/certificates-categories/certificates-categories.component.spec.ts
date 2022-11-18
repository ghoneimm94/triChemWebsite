import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificatesCategoriesComponent } from './certificates-categories.component';

describe('CertificatesCategoriesComponent', () => {
  let component: CertificatesCategoriesComponent;
  let fixture: ComponentFixture<CertificatesCategoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CertificatesCategoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CertificatesCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
