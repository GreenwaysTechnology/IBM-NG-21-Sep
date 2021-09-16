import { Component, OnInit } from '@angular/core';
import { USERS } from '../mock-data/users';

@Component({
  selector: 'app-forloop',
  templateUrl: './forloop.component.html',
  styles: [
  ]
})
export class ForloopComponent implements OnInit {

  courses: Array<string> = ["javascript", "angular", "Microservices"]

  users: Array<any> = USERS;




  constructor() { }

  ngOnInit(): void {
  }

}
