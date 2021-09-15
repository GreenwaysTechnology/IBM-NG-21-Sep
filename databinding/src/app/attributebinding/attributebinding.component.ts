import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-attributebinding',
  templateUrl: './attributebinding.component.html',
  styles: [
  ]
})
export class AttributebindingComponent implements OnInit {

  imageLocation: string = "favicon.ico"
  isEnabled:boolean = false;
  hide:boolean =true;

  constructor() { }

  ngOnInit(): void {
  }

}
