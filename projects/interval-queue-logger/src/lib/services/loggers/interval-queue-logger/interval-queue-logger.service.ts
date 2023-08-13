import { Injectable, inject } from '@angular/core';
import { TOKEN_LOGGER_TIMESTAMP_SERVICE } from '../../../tokens/time-stamp.token';
import { QueueService } from '../../queue/queue.service';
import { ILoggerService } from '../../../models/logger-service.interface';
import { TOKEN_LOGGER_CONFIG } from '../../../tokens/config.token';
import { FlusherService } from '../../flusher/flusher.service';
import { TOKEN_LOGGER_MESSAGEFORMAT_SERVICE } from '../../../tokens/message-format.token';

const DEFAULT_INTERVAL = 5000;

@Injectable()
export class IntervalQueueLoggerService implements ILoggerService {
  private config = inject(TOKEN_LOGGER_CONFIG);
  private timeStampService = inject(TOKEN_LOGGER_TIMESTAMP_SERVICE);
  private messageFormatService = inject(TOKEN_LOGGER_MESSAGEFORMAT_SERVICE);
  private queueService = inject(QueueService<string>);
  private flusherService = inject(FlusherService);

  constructor() {
    this.flusherService.flushQueuePeriodaclly(
      this.config.queue?.interval || DEFAULT_INTERVAL,
      this.queueService.getQueueObservable()
    );
  }

  public error(errorMsg: string, additional: any[] = []) {
    const errortimeStamp = this.timeStampService.getTimeStamp(this.config);
    const message = this.messageFormatService.getMessageFormat(
      this.config,
      errortimeStamp,
      errorMsg,
      additional
    );
    this.queueService.push(message);
  }
}
