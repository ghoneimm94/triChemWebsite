import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsAndeventsDetailsComponent } from './news-andevents-details.component';

describe('NewsAndeventsDetailsComponent', () => {
  let component: NewsAndeventsDetailsComponent;
  let fixture: ComponentFixture<NewsAndeventsDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsAndeventsDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsAndeventsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
