import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styles: [
  ]
})
export class EventComponent implements OnInit {


  //listener function
  onClick() {
    alert('hello')
  }
  onReceive(message:string) {
    alert(message)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
