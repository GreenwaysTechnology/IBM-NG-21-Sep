import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent-event',
  templateUrl: './parent.component.html',
  styles: [
  ]
})
export class ParentComponent implements OnInit {
  childText: string = ""
  
  readData(data: string) {
    this.childText = data;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
