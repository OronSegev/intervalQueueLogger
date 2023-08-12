import { Injectable, inject } from '@angular/core';
import { Observable, Subscription, bufferTime, filter } from 'rxjs';
import { LOGGER_TARGET_TOKEN } from '../../tokens/target.token';

@Injectable({
  providedIn: 'root',
})
export class FlusherService {
  private subscription!: Subscription;
  private target = inject(LOGGER_TARGET_TOKEN);
  public flushQueuePeriodaclly<T>(interval: number, queue$: Observable<T>) {
    this.subscription = queue$
      .pipe(
        bufferTime(interval), // Collects emitted items over a span of 5 seconds into an array
        filter((items: T[]) => items.length > 0) // Filters out empty arrays
      )
      .subscribe((items: T[]) => {
        this.target.write<T>(items);
      });
  }

  public stop() {
    this.subscription.unsubscribe();
  }
}
