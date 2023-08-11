import { importProvidersFrom } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IntervalQueueLoggerModule } from '../../interval-queue-logger/src/public-api';



bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(
      HttpClientModule,
      BrowserAnimationsModule,
      IntervalQueueLoggerModule.forRoot({isProduction: true})
    )
  ]
})
  .catch(err => console.error(err));
