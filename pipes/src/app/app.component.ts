import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pipes';
  message: string = "hello!"
  price: number = 1000.898766
  date = new Date();
  employee = {
    id: 1,
    name: 'subramanian',
    city: 'coimbatore'
  }
}
