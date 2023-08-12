import { Injectable, inject } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, catchError, finalize, of, throwError } from 'rxjs';
import { LOGGER_SERVICE } from '../tokens/logger.token';
import { TOKEN_LOGGER_CONFIG } from '../tokens/config.token';

@Injectable()
export class HttpErrorLoggerInterceptor implements HttpInterceptor {
  private config = inject(TOKEN_LOGGER_CONFIG);
  private _logger = inject(LOGGER_SERVICE);

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    if (!this.config.isProduction) {
      return next.handle(request);
    }

    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        if (this.config.isProduction) {
          if (error.error instanceof ErrorEvent) {
            // do nothing
          } else {
            this._logger.error(error.message, error.statusText);
          }
        }

        return throwError(() => new HttpErrorResponse({ error }));
      })
    );
  }
}
