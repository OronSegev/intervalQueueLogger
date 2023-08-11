import { TestBed } from '@angular/core/testing';

import { IQLoggerMessageFormatService } from './message-format.service';

describe('MessageFormatService', () => {
  let service: IQLoggerMessageFormatService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IQLoggerMessageFormatService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
