import { Injectable } from '@angular/core';
import { ITarget } from '../../../models/target.interface';

@Injectable({
  providedIn: 'root',
})
export class ConsoleTargetService implements ITarget {
  write<T>(items: T[]): void {
    items.forEach((item) => {
      console.log(item);
    });
  }
}
