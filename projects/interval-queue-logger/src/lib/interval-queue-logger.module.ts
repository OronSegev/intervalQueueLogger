import {
  ErrorHandler,
  Injector,
  ModuleWithProviders,
  NgModule,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TimeStampService } from './services/time-stamp/time-stamp.service';
import { MessageFormatService } from './services/message-format/message-format.service';
import { GlobalErrorLoggerService } from './global-error-logger/global-error-logger.service';
import { HttpErrorLoggerInterceptor } from './http-error-logger/http-error-logger.interceptor';
import { resolveLogger } from './factories/logger.factory';
import { TOKEN_LOGGER_TIMESTAMP_SERVICE } from './tokens/time-stamp.token';
import { TOKEN_LOGGER_MESSAGEFORMAT_SERVICE } from './tokens/message-format.token';
import { TOKEN_LOGGER_CONFIG } from './tokens/config.token';
import {
  ICustomLoggerProviders,
  Logger_Config,
} from './models/logger-config.models';
import { LOGGER_SERVICE } from './tokens/logger.token';
import { LOGGER_TARGET_TOKEN } from './tokens/target.token';
import { resolveTarget } from './factories/resolveTarget.factory';

@NgModule({
  imports: [CommonModule],
})
export class IntervalQueueLoggerModule {
  static forRoot(
    config: Logger_Config,
    customProviders?: ICustomLoggerProviders
  ): ModuleWithProviders<IntervalQueueLoggerModule> {
    if (!customProviders) {
      customProviders = {};
    }

    // default config provider
    if (!customProviders.configProvider) {
      customProviders.configProvider = {
        provide: TOKEN_LOGGER_CONFIG,
        useValue: config || {},
      };
    } else {
      // if the user provided its own config, we just make sure the injection token is correct
      if (customProviders.configProvider.provide !== TOKEN_LOGGER_CONFIG) {
        throw new Error(
          `Wrong injection token for configProvider, it should be ${TOKEN_LOGGER_CONFIG} and you used ${customProviders.configProvider.provide}`
        );
      }
    }

    // default timeStamp provider
    if (!customProviders.timeStampProvider) {
      customProviders.timeStampProvider = {
        provide: TOKEN_LOGGER_TIMESTAMP_SERVICE,
        useClass: TimeStampService,
      };
    } else {
      // if the user provided its own metadataService, we just make sure the injection token is correct
      if (
        customProviders.timeStampProvider.provide !==
        TOKEN_LOGGER_TIMESTAMP_SERVICE
      ) {
        throw new Error(
          `Wrong injection token for timeStampProvider, it should be '${TOKEN_LOGGER_TIMESTAMP_SERVICE}' and you used '${customProviders.timeStampProvider.provide}'`
        );
      }
    }

    // default messageFormat provider
    if (!customProviders.messageFormatProvider) {
      customProviders.messageFormatProvider = {
        provide: TOKEN_LOGGER_MESSAGEFORMAT_SERVICE,
        useClass: MessageFormatService,
      };
    } else {
      // if the user provided its own messageFormat, we just make sure the injection token is correct
      if (
        customProviders.messageFormatProvider.provide !==
        TOKEN_LOGGER_MESSAGEFORMAT_SERVICE
      ) {
        throw new Error(
          `Wrong injection token for messageFormatProvider, it should be '${TOKEN_LOGGER_MESSAGEFORMAT_SERVICE}' and you used '${customProviders.messageFormatProvider.provide}'`
        );
      }
    }

    // default target provider
    if (!customProviders.targetProvider) {
      customProviders.targetProvider = {
        provide: LOGGER_TARGET_TOKEN,
        useFactory: resolveTarget,
        deps: [Injector],
      };
    } else {
      // if the user provided its own target, we just make sure the injection token is correct
      if (customProviders.targetProvider.provide !== LOGGER_TARGET_TOKEN) {
        throw new Error(
          `Wrong injection token for targetProvider, it should be '${LOGGER_TARGET_TOKEN}' and you used '${customProviders.messageFormatProvider.provide}'`
        );
      }
    }

    return {
      ngModule: IntervalQueueLoggerModule,
      providers: [
        customProviders.configProvider,
        customProviders.timeStampProvider,
        customProviders.messageFormatProvider,
        customProviders.targetProvider,
        {
          provide: LOGGER_SERVICE,
          useFactory: resolveLogger,
          deps: [Injector],
        },
        {
          provide: ErrorHandler,
          useClass: GlobalErrorLoggerService,
        },
        {
          provide: HTTP_INTERCEPTORS,
          useClass: HttpErrorLoggerInterceptor,
          multi: true,
        },
      ],
    };
  }
}
