import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {

  private behaviour = new BehaviorSubject(1);
  constructor() { }

  public broadCast(): BehaviorSubject<number> {
    return this.behaviour;
  }

}
