import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpErrorLoggerInterceptor } from './http-error-logger.interceptor';
import { HttpClient, HTTP_INTERCEPTORS, HttpErrorResponse } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';
import { TOKEN_LOGGER_CONFIG } from '../tokens/config.token';
import { LOGGER_SERVICE } from '../tokens/logger.token';

describe('HttpErrorLoggerInterceptor', () => {
  let http: HttpClient;
  let httpTestingController: HttpTestingController;
  let mockLoggerService: any;
  let mockLoggerConfig: any;

  beforeEach(() => {
    mockLoggerService = jasmine.createSpyObj('LoggerService', ['error']);
    mockLoggerConfig = { isProduction: true };

    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        { provide: LOGGER_SERVICE, useValue: mockLoggerService },
        { provide: TOKEN_LOGGER_CONFIG, useValue: mockLoggerConfig },
        {
          provide: HTTP_INTERCEPTORS,
          useClass: HttpErrorLoggerInterceptor,
          multi: true,
        },
      ],
    });

    http = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(http).toBeTruthy();
  });

  it('should not intercept error when not in production', () => {
    mockLoggerConfig.isProduction = false;

    http.get('/test').subscribe(
      () => {},
      (error) => {
        expect(error).toBeInstanceOf(HttpErrorResponse);
      }
    );

    const req = httpTestingController.expectOne('/test');
    req.error(new ErrorEvent('Network error'));
    httpTestingController.verify();
  });

});
