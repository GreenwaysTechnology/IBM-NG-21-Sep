import { Component, OnInit } from '@angular/core';
import { Author } from './register.model';

@Component({
  selector: 'app-userregisteration',
  templateUrl: './userregisteration.component.html',
  styles: [
  ]
})
export class UserregisterationComponent implements OnInit {

  userForm: any
  categories: Array<string> = ["User interface", "MicroServices", "Devops"];
  constructor() {
    this.userForm = new Author(Math.random(), "Angular in Action", "Subramanian", this.categories[0]);
  }

  ngOnInit(): void {
  }
  onSubmit() {
    //submit to this service
    console.log(this.userForm)
    // this.userForm.title="";
    // this.userForm.author="";

  }
  clear() {
    this.userForm.title = "";
    this.userForm.author = "";
  }

}
