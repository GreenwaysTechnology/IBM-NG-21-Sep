import { Component, OnInit } from '@angular/core';
import { NumberStreamService } from './numberstream.service';

@Component({
  selector: 'app-numberreactive',
  templateUrl: './numberreactive.component.html',
  styles: [
  ]
})
export class NumberreactiveComponent implements OnInit {

  stream$: Array<number> = [];
  constructor(private numService: NumberStreamService) { }

  ngOnInit(): void {
    //listener/subscriber
    //simpleStream();
    //this.doubleIt();
    this.findEvenNumbers();
  }
  private simpleStream() {
    this.numService.getValue().subscribe(num => {
      console.log(`stream data  : ${num}`)
      this.stream$.push(num);
    }, err => {
      console.log(err)
    }, () => {
      console.log('done');
    });
  }
  private doubleIt() {
    this.numService.doubleIt().subscribe(num => {
      this.stream$.push(num);
    }, err => {
      console.log(err)
    }, () => {
      console.log('done');
    });
  }

  private findEvenNumbers(){
    this.numService.findEvenNumbers().subscribe(num => {
      this.stream$.push(num);
    }, err => {
      console.log(err)
    }, () => {
      console.log('done');
    });
  }

}
