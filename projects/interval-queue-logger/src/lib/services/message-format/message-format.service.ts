import { Injectable } from '@angular/core';
import { LoggerConfig } from '../../config/config.interface';
import { IMessageFormatService } from '../../models/logger-message-format.interface';

@Injectable()
export class MessageFormatService implements IMessageFormatService {
  protected computeMessageFomat(
    config: LoggerConfig,
    timestamp: string,
    messageErr: string,
    additional: any[] = []
  ): string {
    let messageFormat = '[{timestamp}] - {messageErr}';

    if (config.messageFormat) {
      messageFormat = config.messageFormat;
    }

    let message = messageFormat
      .replace('{timestamp}', timestamp)
      .replace('{messageErr}', messageErr);

    message +=
      ' ' +
      additional.map((item, idx) => {
        try {
          if (item instanceof Error) {
            return item?.stack;
          }

          if (typeof item === 'object') {
            return JSON.stringify(item);
          }

          return item;
        } catch (e) {
          return `The additional[${idx}] value could not be parsed using JSON.stringify().`;
        }
      });

    return message;
  }

  public getMessageFormat(
    config: LoggerConfig,
    timestamp: string,
    message: string,
    additional: any[] = []
  ): string {
    return this.computeMessageFomat(config, timestamp, message, additional);
  }
}
