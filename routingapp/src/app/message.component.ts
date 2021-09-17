import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styles: [
  ]
})
export class MessageComponent implements OnInit {

  message: string = ""
  //to read url information: params,queryParams
  constructor(private routerInfo: ActivatedRoute) { }

  ngOnInit(): void {
    this.routerInfo.params.subscribe(info => {
      console.log(info);
      this.message = info.message
    });
  }

}
