import { Component, OnInit } from '@angular/core';
import { MessageService } from '../utils/message.service';
import { CalculatorService } from './calculator.service';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styles: [
  ]
})
export class CalculatorComponent implements OnInit {

  result: number = 0;

  constructor(private calcService: CalculatorService, public messageService: MessageService) {
  }
  public add() {
    this.result = this.calcService.add(10, 10);
  }
  public multiply() {
    this.result = this.calcService.multiply(10, 10);
  }
  ngOnInit(): void {
  }

}
