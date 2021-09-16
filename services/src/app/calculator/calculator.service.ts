import { Injectable } from '@angular/core';
import { MessageService } from '../utils/message.service';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {
  constructor(private messageService: MessageService) { }

  //biz method
  public add(a: number, b: number): number {
    this.messageService.add('add method  is called')
    return a + b;
  }
  public substrac(a: number, b: number): number {
    this.messageService.add('substract method  is called')
    return a - b;
  }
  public multiply(a: number, b: number): number {
    this.messageService.add('multiply method  is called')

    return a * b;
  }
  public div(a: number, b: number): number {
    this.messageService.add('div method  is called')
    return a / b;
  }
}
