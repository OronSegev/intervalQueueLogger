import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntervalQueueLoggerComponent } from './interval-queue-logger.component';

describe('IntervalQueueLoggerComponent', () => {
  let component: IntervalQueueLoggerComponent;
  let fixture: ComponentFixture<IntervalQueueLoggerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IntervalQueueLoggerComponent]
    });
    fixture = TestBed.createComponent(IntervalQueueLoggerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
