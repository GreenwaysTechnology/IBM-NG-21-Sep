import { Injectable } from '@angular/core';
import { of, Observable, range } from 'rxjs';
import { delay, filter, map, takeLast } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NumberStreamService {

  constructor() { }
  //streamming
  // public getValue(): Observable<number> {
  //   return new Observable(subscriber => {
  //     //push data into stream
  //     subscriber.next(1);
  //     subscriber.next(2);
  //     subscriber.next(3);
  //     setTimeout(() => {
  //       subscriber.next(4);
  //       subscriber.complete();
  //     }, 1000);
  //   });

  // }
  //creational operator : of
  public getValue(): Observable<number> {
    return of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
  }

  //process the data : transformation and filter

  //double it:

  public doubleIt(): Observable<number> {
    return of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)
      .pipe(
        map(i => i * 2),
        map(j => j)
      );
  }

  // public findEvenNumbers(): Observable<number> {
  //   return of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)
  //     .pipe(
  //       filter(i => i % 2 === 0)
  //     );
  // }

  //find even numbers for from to 100
  // public findEvenNumbers(): Observable<number> {
  //   return range(1,100)
  //     .pipe(
  //       filter(i => i % 2 === 0)
  //     );
  // }
  //find even numbers from 1 to 100 , but i need last 10 values only
  public findEvenNumbers(): Observable<number> {
    return range(1,100)
      .pipe(
        filter(i => i % 2 === 0),
        delay(5000),
        takeLast(10)
      );
  }


}
