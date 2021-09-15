import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dynamiccss',
  templateUrl: './dynamiccss.component.html',
  styles: [
  ]
})
export class DynamiccssComponent implements OnInit {
  isSpecial: boolean = true
  activeLinkStyle = 'overline';
  constructor() { }

  changeStyle() {
    this.isSpecial = !this.isSpecial
  }

  ngOnInit(): void {
  }

}
