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
      // using defualt config - console log as defualt target , and direct logger - no queue
      IntervalQueueLoggerModule.forRoot({
        isProduction: true,
      })
    ),
  ],
});

// different configuration - using interval queue and setting interval for 5 sec
// and using local Storage as target

// IntervalQueueLoggerModule.forRoot({
//   isProduction: true,
//   queue: {
//     interval: 5000 // time in milisecound
//   },
//   target: 'localStorage'
// })

// example for different message format

// IntervalQueueLoggerModule.forRoot({
//   isProduction: true,
//   queue: {
//     interval: 5000 // time in milisecound
//   },
//   target: 'localStorage',
//   messageFormat: '[{message} - {timeStamp}, {stackTrace}]'
// })
