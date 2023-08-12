import { TestBed } from '@angular/core/testing';

import { FlusherService } from './flusher.service';

describe('FlusherService', () => {
  let service: FlusherService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FlusherService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
