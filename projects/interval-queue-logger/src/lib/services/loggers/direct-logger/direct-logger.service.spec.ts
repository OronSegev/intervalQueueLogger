import { TestBed } from '@angular/core/testing';

import { DirectLoggerService } from './direct-logger.service';

describe('DirectLoggerService', () => {
  let service: DirectLoggerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DirectLoggerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
