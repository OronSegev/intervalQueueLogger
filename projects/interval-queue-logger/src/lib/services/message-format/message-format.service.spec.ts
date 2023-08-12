import { TestBed } from '@angular/core/testing';
import { MessageFormatService } from './message-format.service';
import { LoggerConfig } from '../../config/config.interface';

describe('MessageFormatService', () => {
  let service: MessageFormatService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MessageFormatService],
    });

    service = TestBed.inject(MessageFormatService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should compute default message format', () => {
    const config: LoggerConfig = {isProduction: true};
    const timestamp = '2023-08-13';
    const message = 'Test message';
    const stackTrace = 'Test stack trace';

    const result = service.getMessageFormat(config, timestamp, message, stackTrace);

    expect(result).toBe('[2023-08-13] - Test message, Test stack trace');
  });

  it('should compute custom message format', () => {
    const config: LoggerConfig = {
      isProduction: true,
      messageFormat: '[{timestamp}] - {message}',
    };
    const timestamp = '2023-08-13';
    const message = 'Test message';

    const result = service.getMessageFormat(config, timestamp, message, '');

    expect(result).toBe('[2023-08-13] - Test message');
  });

  it('should compute custom message format with stack trace', () => {
    const config: LoggerConfig = {
      isProduction: true,
      messageFormat: '{message} - {stackTrace}',
    };
    const message = 'Test message';
    const stackTrace = 'Test stack trace';

    const result = service.getMessageFormat(config, '', message, stackTrace);

    expect(result).toBe('Test message - Test stack trace');
  });
});
