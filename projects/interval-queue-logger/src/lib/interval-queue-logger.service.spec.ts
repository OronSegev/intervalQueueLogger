import { TestBed } from '@angular/core/testing';

import { IntervalQueueLoggerService } from './interval-queue-logger.service';

describe('IntervalQueueLoggerService', () => {
  let service: IntervalQueueLoggerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IntervalQueueLoggerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
