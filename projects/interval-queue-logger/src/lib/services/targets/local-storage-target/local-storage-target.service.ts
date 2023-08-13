import { Injectable, OnDestroy, inject } from '@angular/core';
import { ITarget } from '../../../models/target.interface';
import { TOKEN_LOGGER_CONFIG } from '../../../tokens/config.token';

@Injectable()
export class LocalStorageTargetService implements ITarget {
  ngOnDestroy(): void {
    localStorage.removeItem(this.localStorageKey);
  }

  private config = inject(TOKEN_LOGGER_CONFIG);

  private localStorageKey = 'logger';

  write<T>(items: T[]): void {
    this.localStorageKey = this.config?.localStorageKey || this.localStorageKey;

    const itemsArrayJSON = localStorage.getItem(this.localStorageKey);
    const itemsArray = itemsArrayJSON ? JSON.parse(itemsArrayJSON) : [];

    itemsArray.push(...items);

    const updatedarrayJSON = JSON.stringify(itemsArray);

    try {
      localStorage.setItem(this.localStorageKey, updatedarrayJSON);
    } catch (e) {
      console.error(e);
    }
  }
}
