import { Injectable } from '@angular/core';
import { Observable, bufferTime, filter } from 'rxjs';

@Injectable()
export class FlusherService {
  public flushQueuePeriodaclly<T>(
    interval: number,
    queue$: Observable<T>
  ): Observable<T[]> {
    return queue$.pipe(
      bufferTime(interval), // Collects emitted items over a span of 5 seconds into an array
      filter((items: T[]) => items.length > 0) // Filters out empty arrays
    );
  }
}
