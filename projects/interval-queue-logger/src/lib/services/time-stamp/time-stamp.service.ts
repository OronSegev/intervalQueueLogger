import { DatePipe } from '@angular/common';
import { Injectable, Optional } from '@angular/core';
import { LoggerConfig } from '../../config/config.interface';
import { ITimeStampService } from '../../models/logger-time-stamp.interface';

@Injectable()
export class TimeStampService implements ITimeStampService {
  constructor(@Optional() protected readonly datePipe: DatePipe) {}

  protected computeTimeStamp(config: LoggerConfig): string {
    const defaultTimeStamp = () => new Date().toISOString();

    if (config.timeStampFormat) {
      if (!this.datePipe) {
        console.error(
          "IQLogger : Can't use timeStampFormat because DatePipe is not provided. You need to provide DatePipe"
        );
        return defaultTimeStamp();
      } else {
        return (
          this.datePipe.transform(new Date(), config.timeStampFormat) || ''
        );
      }
    }
    return defaultTimeStamp();
  }

  public getTimeStamp(config: LoggerConfig) {
    return this.computeTimeStamp(config);
  }
}
