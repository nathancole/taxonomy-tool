import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopicBrowserComponent } from './topic-browser.component';

describe('TopicBrowserComponent', () => {
  let component: TopicBrowserComponent;
  let fixture: ComponentFixture<TopicBrowserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopicBrowserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopicBrowserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
