import {
  ClassProvider,
  ConstructorProvider,
  ExistingProvider,
  FactoryProvider,
  ModuleWithProviders,
  NgModule,
  ValueProvider,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { IQLoggerConfig, TOKEN_LOGGER_CONFIG } from './config/config.interface';
import { IntervalQueueLoggerService } from './interval-queue-logger.service';
import { IQLoggerTimeStampService } from './services/iqlogger-time-stamp/iqlogger-time-stamp.service';
import { TOKEN_LOGGER_TIMESTAMP_SERVICE } from './models/iqlogger-time-stamp.interface';
import { TOKEN_LOGGER_MESSAGEFORMAT_SERVICE } from './services/messageformat/IIQLoggerMessageFormat.interface';
import { IQLoggerMessageFormatService } from './services/messageformat/message-format.service';

@NgModule({
  imports: [CommonModule],
})
export class IntervalQueueLoggerModule {
  static forRoot(
    config: IQLoggerConfig | null | undefined,
    customProvider?: {
      configProvider?:
        | ValueProvider
        | ClassProvider
        | ConstructorProvider
        | ExistingProvider
        | FactoryProvider;
      timeStampProvider?:
        | ValueProvider
        | ClassProvider
        | ConstructorProvider
        | ExistingProvider
        | FactoryProvider;
      messageFormatProvider?:
        | ValueProvider
        | ClassProvider
        | ConstructorProvider
        | ExistingProvider
        | FactoryProvider;
    }
  ): ModuleWithProviders<IntervalQueueLoggerModule> {
    if (!customProvider) {
      customProvider = {};
    }

    // default config provider
    if (!customProvider.configProvider) {
      customProvider.configProvider = {
        provide: TOKEN_LOGGER_CONFIG,
        useValue: config || {},
      };
    } else {
      // if the user provided its own config, we just make sure the injection token is correct
      if (customProvider.configProvider.provide !== TOKEN_LOGGER_CONFIG) {
        throw new Error(
          `Wrong injection token for configProvider, it should be ${TOKEN_LOGGER_CONFIG} and you used ${customProvider.configProvider.provide}`
        );
      }
    }

    // default timeStamp provider
    if (!customProvider.timeStampProvider) {
      customProvider.timeStampProvider = {
        provide: TOKEN_LOGGER_TIMESTAMP_SERVICE,
        useClass: IQLoggerTimeStampService,
      };
    } else {
      // if the user provided its own metadataService, we just make sure the injection token is correct
      if (
        customProvider.timeStampProvider.provide !==
        TOKEN_LOGGER_TIMESTAMP_SERVICE
      ) {
        throw new Error(
          `Wrong injection token for timeStampProvider, it should be '${TOKEN_LOGGER_TIMESTAMP_SERVICE}' and you used '${customProvider.timeStampProvider.provide}'`
        );
      }
    }

    // default messageFormat provider
    if (!customProvider.messageFormatProvider) {
      customProvider.messageFormatProvider = {
        provide: TOKEN_LOGGER_MESSAGEFORMAT_SERVICE,
        useClass: IQLoggerMessageFormatService,
      };
    } else {
      // if the user provided its own metadataService, we just make sure the injection token is correct
      if (
        customProvider.messageFormatProvider.provide !==
        TOKEN_LOGGER_MESSAGEFORMAT_SERVICE
      ) {
        throw new Error(
          `Wrong injection token for messageFormatProvider, it should be '${TOKEN_LOGGER_MESSAGEFORMAT_SERVICE}' and you used '${customProvider.messageFormatProvider.provide}'`
        );
      }
    }

    return {
      ngModule: IntervalQueueLoggerModule,
      providers: [
        IntervalQueueLoggerService,
        customProvider.configProvider,
        customProvider.timeStampProvider,
        customProvider.messageFormatProvider,
      ],
    };
  }
}
