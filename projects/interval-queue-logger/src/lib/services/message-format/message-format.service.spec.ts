import { TestBed } from '@angular/core/testing';

import { MessageFormatService } from './message-format.service';

describe('MessageFormatService', () => {
  let service: MessageFormatService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MessageFormatService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
