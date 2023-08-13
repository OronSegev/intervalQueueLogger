import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';
import { LOGGER_SERVICE } from 'intervalQueueLogger';
import { take } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [CommonModule]
})
export class AppComponent implements OnInit {
  title = 'testApp';
  private http = inject(HttpClient);

  constructor() {}

  ngOnInit(): void {

    this.http.get('https://jsonplaceholder.typicode.com/todos/dsf').pipe(take(1)).subscribe();


    throw new Error('my error message');
  }

}
