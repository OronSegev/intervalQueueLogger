import { TestBed } from '@angular/core/testing';

import { HttpErrorLoggerInterceptor } from './http-error-logger.interceptor';

describe('HttpErrorLoggerInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      HttpErrorLoggerInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: HttpErrorLoggerInterceptor = TestBed.inject(HttpErrorLoggerInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
