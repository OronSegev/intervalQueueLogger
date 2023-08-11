import { TestBed } from '@angular/core/testing';

import { IQLoggerTimeStampService } from './iqlogger-time-stamp.service';

describe('IQLoggerTimeStampService', () => {
  let service: IQLoggerTimeStampService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IQLoggerTimeStampService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
