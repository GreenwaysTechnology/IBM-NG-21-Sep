import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child-event',
  templateUrl: './child.component.html',
  styles: [
  ]
})
export class ChildComponent implements OnInit {

  message: string = "default"

  //event emitter with custom event
  //onSendRequest - name of the custom event 
  @Output()
  onSendRequest = new EventEmitter<string>();

  sendToParent() {
    //send data to parent
    //emit event
    this.onSendRequest.emit(this.message);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
