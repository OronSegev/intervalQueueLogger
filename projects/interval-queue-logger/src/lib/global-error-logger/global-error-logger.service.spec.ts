import { TestBed } from '@angular/core/testing';

import { GlobalErrorLoggerService } from './global-error-logger.service';
import { TOKEN_LOGGER_CONFIG } from '../tokens/config.token';
import { LOGGER_SERVICE } from '../tokens/logger.token';

describe('GlobalErrorLoggerService', () => {
  let service: GlobalErrorLoggerService;
  let mockLoggerService: any;
  let mockLoggerConfig: any;

  beforeEach(() => {
    mockLoggerService = jasmine.createSpyObj('LoggerService', ['error']);
    mockLoggerConfig = { isProduction: true };

    TestBed.configureTestingModule({
      providers: [
        GlobalErrorLoggerService,
        { provide: LOGGER_SERVICE, useValue: mockLoggerService },
        { provide: TOKEN_LOGGER_CONFIG, useValue: mockLoggerConfig },
      ],
    });

    service = TestBed.inject(GlobalErrorLoggerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should log error when handleError is called in production', () => {
    const mockError = { message: 'Test error', stackTrace: 'Error stack' };

    service.handleError(mockError);

    expect(mockLoggerService.error).toHaveBeenCalledWith(mockError.message, mockError.stackTrace);
  });

  it('should not log error when handleError is called in non-production', () => {
    mockLoggerConfig.isProduction = false;
    const mockError = { message: 'Test error', stackTrace: 'Error stack' };

    service.handleError(mockError);

    expect(mockLoggerService.error).not.toHaveBeenCalled();
  });
});
