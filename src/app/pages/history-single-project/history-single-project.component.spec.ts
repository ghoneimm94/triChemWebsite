import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HistorySingleProjectComponent } from './history-single-project.component';

describe('HistorySingleProjectComponent', () => {
  let component: HistorySingleProjectComponent;
  let fixture: ComponentFixture<HistorySingleProjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistorySingleProjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistorySingleProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
