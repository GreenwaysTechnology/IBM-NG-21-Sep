import { Component, Input, OnInit } from '@angular/core';
import { Address } from '../types/address.type';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  //component styles
  // styles: [` 
  //       div { background-color: yellow ; }
  //       ul {
  //         list-style-type: upper-roman;
          
  //       }
           
  // `]
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input()
  message: string = "";

  /**
   * ts config 
   * strict: true 
   * means that variable must have been initalized
   * but i dont want to make strict : false
   * there is solution : definite assigment operator "!"
   */
  @Input()
  address!: Address;

  @Input('skills')
  myskills!: Array<string>;

  constructor() { }

  ngOnInit(): void {
  }

}
