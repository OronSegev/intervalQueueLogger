import { DestroyRef, Injectable, OnDestroy, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { TOKEN_LOGGER_TIMESTAMP_SERVICE } from '../../../tokens/time-stamp.token';
import { QueueService } from '../../queue/queue.service';
import { ILoggerService } from '../../../models/logger-service.interface';
import { TOKEN_LOGGER_CONFIG } from '../../../tokens/config.token';
import { FlusherService } from '../../flusher/flusher.service';
import { TOKEN_LOGGER_MESSAGEFORMAT_SERVICE } from '../../../tokens/message-format.token';
import { LOGGER_TARGET_TOKEN } from '../../../tokens/target.token';

const DEFAULT_INTERVAL = 5000;

@Injectable()
export class IntervalQueueLoggerService implements ILoggerService, OnDestroy {
  private config = inject(TOKEN_LOGGER_CONFIG);
  private timeStampService = inject(TOKEN_LOGGER_TIMESTAMP_SERVICE);
  private messageFormatService = inject(TOKEN_LOGGER_MESSAGEFORMAT_SERVICE);
  private target = inject(LOGGER_TARGET_TOKEN);
  private queueService = inject(QueueService<string>);
  private destroyRef = inject(DestroyRef);

  constructor() {
    this.queueService
      .display(this.config.queue?.interval || DEFAULT_INTERVAL)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((items: string[]) => {
        this.target.write(items);
      });
  }

  ngOnDestroy(): void {}

  public error(errorMsg: string, additional: any[] = []) {
    const errortimeStamp = this.timeStampService.getTimeStamp(this.config);
    const message = this.messageFormatService.getMessageFormat(
      this.config,
      errortimeStamp,
      errorMsg,
      additional
    );
    this.queueService.enQueue(message);
  }
}
