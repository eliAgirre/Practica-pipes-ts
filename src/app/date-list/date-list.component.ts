import { Component } from '@angular/core';

@Component({
  selector: 'app-date-list',
  templateUrl: './date-list.component.html'
})
export class DateListComponent {

  today: number = Date.now();
}
