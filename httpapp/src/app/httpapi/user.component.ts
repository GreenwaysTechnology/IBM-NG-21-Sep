import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
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
  user!: Observable<User>;
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.findAll().subscribe(users => {
      this.users = users;
    });
  }
  showUserByid() {
    this.user = this.userService.findById(13);
  }

}
