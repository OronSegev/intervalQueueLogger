import { Injectable, inject } from '@angular/core';
import { Observable, ReplaySubject, Subject, interval } from 'rxjs';
import { FlusherService } from '../flusher/flusher.service';

@Injectable()
export class QueueService<T> {
  private flusherService = inject(FlusherService);
  private queueSubject = new Subject<T>();


  public enQueue(item: T) {
    this.queueSubject.next(item);
  }

  public display(interval: number) {
    return this.flusherService.flushQueuePeriodaclly(interval, this.queueSubject);
  }
}
