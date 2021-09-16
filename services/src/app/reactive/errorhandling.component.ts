import { Component, OnInit } from '@angular/core';
import { ErrorhandlingService } from './errorhandling.service';

@Component({
  selector: 'app-errorhandling',
  templateUrl: './errorhandling.component.html',
  styles: [
  ]
})
export class ErrorhandlingComponent implements OnInit {

  constructor(private errorHandlingSerivce: ErrorhandlingService) { }

  ngOnInit(): void {
    // this.errorHandlingSerivce.handleError().subscribe(data => {
    //   console.log(data);
    // }, err => {
    //   console.log(err);
    // });
    //without error handler: using catchError

    this.errorHandlingSerivce.handleError().subscribe(data => {
      console.log('data block ', data);
    }, err => {
      console.log('error block',err);
    });
  }


}
