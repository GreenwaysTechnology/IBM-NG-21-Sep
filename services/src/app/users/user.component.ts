import { Component, OnInit } from '@angular/core';
import { User } from '../types/user.type';
import { UserService } from './user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styles: [
  ]
})
export class UserComponent implements OnInit {

  users!: Array<User>;
  loading: boolean = true;
  status: string = "loading....."

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    //this.users = this.userService.fetchUser();
    // console.log('start')
    // this.userService.fetch((users: User[]) => {
    //   this.loading = !this.loading;
    //   this.users = users;
    //   console.log(this.users)
    // });
    // console.log('end')

    //promise

    this.userService.fetch().then(users => {
      this.loading = !this.loading;
      this.users = users;
    });


  }

}
