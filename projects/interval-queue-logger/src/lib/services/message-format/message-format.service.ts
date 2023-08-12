import { Injectable } from '@angular/core';
import { LoggerConfig } from '../../config/config.interface';
import { IMessageFormatService } from '../../models/logger-message-format.interface';

@Injectable()
export class MessageFormatService implements IMessageFormatService {

  protected computeMessageFomat(config: LoggerConfig, timestamp: string, message: string, stackTrace: string): string {
    let messageFormat = '[{timestamp}] - {message}, {stackTrace}';

    if (config.messageFormat) {
      messageFormat = config.messageFormat;
    }

    return messageFormat.replace('{timestamp}', timestamp).replace('{message}', message).replace('{stackTrace}', stackTrace);
  }

  public getMessageFormat(config: LoggerConfig, timestamp: string, message: string, stackTrace: string): string {
    return this.computeMessageFomat(config, timestamp, message, stackTrace);
  }

}
