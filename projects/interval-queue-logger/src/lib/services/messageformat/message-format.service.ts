import { Injectable } from '@angular/core';
import { IQLoggerConfig } from '../../config/config.interface';
import { IIQLoggerMessageFormatService } from './IIQLoggerMessageFormat.interface';

@Injectable({
  providedIn: 'root'
})
export class IQLoggerMessageFormatService implements IIQLoggerMessageFormatService {

  protected computeMessageFomat(config: IQLoggerConfig): string {
    const defaultMessageFormat = '[{timestamp}] - {message}, {stackTrace}';

    if (config.messageFormat) {
      return config.messageFormat;
    }

    return defaultMessageFormat;
  }

  public getMessageFormat(config: IQLoggerConfig) {
    return this.computeMessageFomat(config);
  }

}
