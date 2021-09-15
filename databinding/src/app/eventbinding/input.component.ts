import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styles: [
  ]
})
export class InputComponent implements OnInit {

  text:string = ""
  messageOne:string = ""
  messageTwo:string ="defaultvalue"
  messageThree:string = ""
  readInput(ctrl: any) {
    this.text = ctrl.target.value 
  }

  constructor() { }

  ngOnInit(): void {
  }

}
