import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentPollComponent } from './content-poll.component';

describe('ContentPollComponent', () => {
  let component: ContentPollComponent;
  let fixture: ComponentFixture<ContentPollComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentPollComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentPollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
