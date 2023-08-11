import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { IntervalQueueLoggerService } from 'intervalQueueLogger';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [CommonModule]
})
export class AppComponent implements OnInit {
  title = 'testApp';

  constructor(private logger: IntervalQueueLoggerService) {

  }
  ngOnInit(): void {
    this.logger.log('testet', 'test');
  }

}
