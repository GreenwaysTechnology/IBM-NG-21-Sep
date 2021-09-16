import { Injectable } from '@angular/core';
import { from, Observable, of } from 'rxjs';
import { USERS } from '../mock-data/users';
import { User } from '../types/user.type';

@Injectable({
  providedIn: 'root'
})
export class ArraystreamService {

  constructor() { }
  // public findAll(): Observable<User> {
  //   return from(USERS);
  // }
  public findAll(): Observable<User[]> {
    return of(USERS);
  }
}
