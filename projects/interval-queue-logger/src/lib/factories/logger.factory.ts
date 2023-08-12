import { Injector } from '@angular/core';
import { IntervalQueueLoggerService } from '../services/loggers/interval-queue-logger/interval-queue-logger.service';
import { DirectLoggerService } from '../services/loggers/direct-logger/direct-logger.service';
import { TOKEN_LOGGER_CONFIG } from '../tokens/config.token';
import { ILoggerService } from '../models/logger-service.interface';

export function resolveLogger(injector: Injector): ILoggerService {
  const config = injector.get(TOKEN_LOGGER_CONFIG);

  if (config.queue) {
    return new IntervalQueueLoggerService();
  }

  return new DirectLoggerService();
}
