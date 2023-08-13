import { Injectable, inject } from '@angular/core';
import { TOKEN_LOGGER_TIMESTAMP_SERVICE } from '../../../tokens/time-stamp.token';
import { ILoggerService } from '../../../models/logger-service.interface';
import { TOKEN_LOGGER_CONFIG } from '../../../tokens/config.token';
import { LOGGER_TARGET_TOKEN } from '../../../tokens/target.token';
import { TOKEN_LOGGER_MESSAGEFORMAT_SERVICE } from '../../../tokens/message-format.token';

@Injectable()
export class DirectLoggerService implements ILoggerService {
  private config = inject(TOKEN_LOGGER_CONFIG);
  private timeStampService = inject(TOKEN_LOGGER_TIMESTAMP_SERVICE);
  private messageFormatService = inject(TOKEN_LOGGER_MESSAGEFORMAT_SERVICE);
  private target = inject(LOGGER_TARGET_TOKEN);

  public error(errorMsg: string, additional: any[] = []) {
    const timeStamp = this.timeStampService.getTimeStamp(this.config);
    const message = this.messageFormatService.getMessageFormat(
      this.config,
      timeStamp,
      errorMsg,
      additional
    );
    this.target.write<string>([message]);
  }
}
