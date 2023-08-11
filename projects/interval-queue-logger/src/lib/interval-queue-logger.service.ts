import { Inject, Injectable, OnDestroy } from '@angular/core';
import { IQLoggerConfig, TOKEN_LOGGER_CONFIG } from './config/config.interface';
import { QueueService } from './services/queue/queue.service';
import { Log } from './models/log.class';
import { TOKEN_LOGGER_TIMESTAMP_SERVICE } from './models/iqlogger-time-stamp.interface';
import { IQLoggerTimeStampService } from './services/iqlogger-time-stamp/iqlogger-time-stamp.service';

@Injectable({
  providedIn: 'root',
})
export class IntervalQueueLoggerService implements OnDestroy {

  // TODO:
  // move serivces and interfaces to seperate folder like ngxlogger for more flat structure
  // add message format service that can be configurable like time stamp format
  // add level to log class and interface
  // remove Log class to make the packge liter and better performace
  // dont log if config.isProduction is true
  // add target/publisher service configurable with the target/publisher
  // add flusher service that flash the queue to target - maybe use worker for background thread;

  constructor(
    @Inject(TOKEN_LOGGER_CONFIG) private config: IQLoggerConfig,
    @Inject(TOKEN_LOGGER_TIMESTAMP_SERVICE) private timeStampService: IQLoggerTimeStampService,
    private readonly queueService: QueueService<Log>
  ) {
    // TODO: implement start flushing queue
  }


  ngOnDestroy(): void {
    // TODO: implement stop flushing queue
  }

  public log(message: string, stackTrace: string): void {
    // const timeStamp = this.timeStampService.getTimeStampFormat(this.config);
    // this.queueService.enqueue(new Log(timeStamp, message, stackTrace));
    console.log('Interval Queue Logger Works');
    console.log(this.config);
  }
}
