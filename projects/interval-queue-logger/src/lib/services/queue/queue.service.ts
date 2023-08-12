import { Injectable } from '@angular/core';
import { Observable, ReplaySubject, Subject, interval } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class QueueService<T> {
  private queueSubject = new Subject<T>();

  public push(item: T) {
    this.queueSubject.next(item);
  }

  public getQueueObservable() {
    return this.queueSubject.asObservable();
  }
}
