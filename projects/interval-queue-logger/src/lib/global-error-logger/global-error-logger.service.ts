import { ErrorHandler, Injectable, inject } from '@angular/core';
import { LOGGER_SERVICE } from '../tokens/logger.token';
import { TOKEN_LOGGER_CONFIG } from '../tokens/config.token';

@Injectable({
  providedIn: 'root'
})
export class GlobalErrorLoggerService implements ErrorHandler {
  private config = inject(TOKEN_LOGGER_CONFIG);
  private _logger: any = inject(LOGGER_SERVICE);

  handleError(error: any): void {
    if (this.config.isProduction === true) {
      this._logger.error(error.message, error.stackTrace || '');
    }
  }
}
