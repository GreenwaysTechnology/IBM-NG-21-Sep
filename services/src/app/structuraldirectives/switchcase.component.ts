import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-switchcase',
  templateUrl: './switchcase.component.html',
  styles: [
  ]
})
export class SwitchcaseComponent implements OnInit {

  input: string = ""
  feedback: string = "good"
  constructor() { }
  showFeedback() {
    this.feedback = this.input
  }

  ngOnInit(): void {
  }

}
