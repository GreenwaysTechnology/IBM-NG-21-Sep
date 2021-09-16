import { Component, OnInit } from '@angular/core';
import { USERS } from '../mock-data/users';

@Component({
  selector: 'app-ifelse',
  templateUrl: './ifelse.component.html',
  styles: [
  ]
})
export class IfelseComponent implements OnInit {

  isEnabled: boolean = true
  users!: Array<any>;
  loading: boolean = true;
  status: string = "loading....."
  isHidden: boolean = false;

  constructor() {
    setTimeout(() => {
      this.users = USERS;
      this.loading = !this.loading;
    }, 5000);
  }

  toggle() {
    this.isHidden = !this.isHidden;
  }
  ngOnInit(): void {
  }

}
