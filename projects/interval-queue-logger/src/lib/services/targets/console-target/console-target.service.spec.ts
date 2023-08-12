import { TestBed } from '@angular/core/testing';

import { ConsoleTargetService } from './console-target.service';

describe('ConsoleTargetService', () => {
  let service: ConsoleTargetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConsoleTargetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
