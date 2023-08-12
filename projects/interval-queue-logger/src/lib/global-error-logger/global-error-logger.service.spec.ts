import { TestBed } from '@angular/core/testing';

import { GlobalErrorLoggerService } from './global-error-logger.service';

describe('GlobalErrorLoggerService', () => {
  let service: GlobalErrorLoggerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GlobalErrorLoggerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
