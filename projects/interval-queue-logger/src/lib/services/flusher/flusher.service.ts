import { Injectable, inject } from '@angular/core';
import { IflusherService } from '../../models/flusher.interface';
import {
  Observable,
  Subject,
  Subscription,
  bufferTime,
  filter,
  interval,
  of,
  takeUntil,
  withLatestFrom,
} from 'rxjs';
import { LOGGER_TARGET_TOKEN } from '../../tokens/target.token';
import { QueueService } from '../queue/queue.service';
import { Log } from '../../models/log.class';

@Injectable({
  providedIn: 'root',
})
export class FlusherService implements IflusherService {
  private subscription!: Subscription;
  private target = inject(LOGGER_TARGET_TOKEN);
  public flushQueuePeriodaclly<T>(interval: number, queue$: Observable<T>) {
    this.subscription = queue$
      .pipe(
        bufferTime(interval), // Collects emitted items over a span of 5 seconds into an array
        filter((items: T[]) => items.length > 0) // Filters out empty arrays
      )
      .subscribe((items: T[]) => {
        console.log('Items in the queue:', items);
        // TODO : use target to write
        this.target.write<T>(items);
      });
  }

  public stop() {
    this.subscription.unsubscribe();
  }
}
