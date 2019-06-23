import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoicePollComponent } from './choice-poll.component';

describe('ChoicePollComponent', () => {
  let component: ChoicePollComponent;
  let fixture: ComponentFixture<ChoicePollComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChoicePollComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChoicePollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
