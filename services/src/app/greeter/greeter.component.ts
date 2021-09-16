import { Component, OnDestroy, OnInit } from '@angular/core';
import { MessageService } from '../utils/message.service';
import { GreeterService } from './greeter.service';

@Component({
  selector: 'app-greeter',
  templateUrl: './greeter.component.html',
  styles: [
  ],
  // providers:[GreeterService]
})
export class GreeterComponent { // implements OnInit, OnDestroy {

  message!: string;
  messages: Array<string> = [];

  constructor(private greeterService: GreeterService, private messageService: MessageService) {
    // this.message = this.greeterService.sayHello();
  }

  ngOnInit(): void {
    //initalization code
    this.message = `${this.greeterService.sayHello()} ${this.greeterService.sayHai()}` ;
    this.messages = this.messageService.fetch();
  }
  ngOnDestroy() {
    //cleanup code will go here
  }

}
