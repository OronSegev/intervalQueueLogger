import { importProvidersFrom } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { IntervalQueueLoggerModule } from 'intervalQueueLogger';

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(
      HttpClientModule,
      BrowserAnimationsModule,
      CommonModule,
      IntervalQueueLoggerModule.forRoot({
        isProduction: true,
        target: 'console',
        localStorageKey: 'myKey'
      })
    ),
  ],
});

// different configuration - using direct logger (no queue)
// and using local Storage as target

// IntervalQueueLoggerModule.forRoot({
//   isProduction: true,
//   target: 'localStorage'
// })

// example for different message format and using queue logger with 5 sec interval
// the queue is independed of the the target

// IntervalQueueLoggerModule.forRoot({
//   isProduction: true,
//   queue: {
//     interval: 5000 // time in milisecound
//   },
//   target: 'localStorage',
//   messageFormat: '[{message} - {timeStamp}]'
// })
