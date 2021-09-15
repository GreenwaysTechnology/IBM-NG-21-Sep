  import { Component, OnInit } from '@angular/core';
  import { Address } from '../types/address.type';

  @Component({
    selector: 'app-parent',
    templateUrl: './parent.component.html',
    styles: [
    ]
  })
  export class ParentComponent implements OnInit {
    mymessage: string = "Hello! Property"
    address:Address = {
      city:'Coimbatore'
    }
    skills:Array<string> = ["java","javascript","Angular"]
    // address!: Address
    constructor() { }

    ngOnInit(): void {
    }

  }
