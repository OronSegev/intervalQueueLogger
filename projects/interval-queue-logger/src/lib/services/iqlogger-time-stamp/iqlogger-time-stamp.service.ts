import { DatePipe } from '@angular/common';
import { Injectable, Optional } from '@angular/core';
import { IQLoggerConfig } from '../../config/config.interface';
import { IIQLoggerTimeStampService } from '../../models/iqlogger-time-stamp.interface';

@Injectable()
export class IQLoggerTimeStampService implements IIQLoggerTimeStampService {

  constructor(@Optional() protected readonly datePipe: DatePipe) { }


  protected computeTimeStamp(config: IQLoggerConfig): string {
    const defaultTimeStamp = () => new Date().toISOString();

    if (config.timeStampFormat) {
      if(!this.datePipe){
        console.error('IQLogger : Can\'t use timeStampFormat because DatePipe is not provided. You need to provide DatePipe');
        return defaultTimeStamp();
      } else {
        return this.datePipe.transform(new Date(), config.timeStampFormat) || '';
      }
    }
    return defaultTimeStamp();
  }

  public getTimeStampFormat(config: IQLoggerConfig) {
    return this.computeTimeStamp(config);
  }
}
