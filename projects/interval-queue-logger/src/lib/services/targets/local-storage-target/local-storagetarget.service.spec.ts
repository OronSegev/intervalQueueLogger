import { TestBed } from '@angular/core/testing';

import { LocalStorageTargetService } from './local-storagetarget.service';

describe('LocalStoragetargetService', () => {
  let service: LocalStorageTargetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LocalStorageTargetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
