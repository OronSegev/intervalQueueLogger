import { InjectionToken } from '@angular/core';
import { ILoggerService } from '../models/logger-service.interface';

export const LOGGER_SERVICE = new InjectionToken<ILoggerService>(
  'LoggerService'
);
