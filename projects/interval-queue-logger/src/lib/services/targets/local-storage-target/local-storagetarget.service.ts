import { Injectable } from '@angular/core';
import { ITarget } from '../../../models/target.interface';

@Injectable()
export class LocalStorageTargetService implements ITarget {
  private loggerLocalStorageKey = 'logger';

  write<T>(items: T[]): void {
    const oldLogs = localStorage.getItem(this.loggerLocalStorageKey) || '';
    localStorage.setItem(
      this.loggerLocalStorageKey,
      oldLogs + JSON.stringify(items)
    );
  }
}
