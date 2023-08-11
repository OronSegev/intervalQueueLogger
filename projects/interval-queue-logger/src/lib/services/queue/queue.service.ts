import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class QueueService<T> {
  private queue: T[] = [];
  private queueSubject = new Subject<T>();

  enqueue(item: T) {
    this.queue.push(item);
    this.queueSubject.next(item);
  }

  dequeue(): T | undefined {
    return this.queue.shift();
  }

  observeQueue(): Observable<T> {
    return this.queueSubject.asObservable();
  }
}
