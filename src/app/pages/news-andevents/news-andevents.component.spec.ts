import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsAndeventsComponent } from './news-andevents.component';

describe('NewsAndeventsComponent', () => {
  let component: NewsAndeventsComponent;
  let fixture: ComponentFixture<NewsAndeventsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsAndeventsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsAndeventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
