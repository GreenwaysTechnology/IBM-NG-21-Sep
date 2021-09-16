import { Injectable } from '@angular/core';
import { USERS } from '../mock-data/users';
import { User } from '../types/user.type';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }
  //sync service
  // fetchUser() {
  //   return USERS
  // }
  //async service with callback
  // fetch(callback: Function) {
  //   setTimeout(callback, 5000, USERS);
  // }
  //async service with promises

  fetch(): Promise<User[]> {
    return new Promise((resolve, reject) => {
      //async logic
      setTimeout(resolve, 5000, USERS);
    });
  }

}
