import { Injectable } from '@angular/core';
import { ITarget } from '../../../models/target.interface';

@Injectable()
export class ConsoleTargetService implements ITarget {
  write<T>(items: T[]): void {
    items.forEach((item) => {
      console.warn(`%c${item}`, "color:red");
    });
  }
}
