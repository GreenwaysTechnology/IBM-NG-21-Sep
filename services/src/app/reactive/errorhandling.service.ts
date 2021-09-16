import { Injectable } from '@angular/core';
import { Observable, of, timer } from 'rxjs';
import { map, catchError, retry, retryWhen, tap, delayWhen } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ErrorhandlingService {

  constructor() { }

  //handling error inside subscribe method
  // public handleError(): Observable<number> {
  //   return of(1, 2, 3, 4, 5).pipe(
  //     map(n => {
  //       if (n === 4) {
  //         throw 'four!';
  //       }
  //       return n;
  //     }),
  //   )

  // }

  //implementing fallback
  //catchError will convert error into success response
  public handleError(): Observable<number> {
    return of(1, 2, 3, 4, 5).pipe(
      map(n => {
        console.log('hitting', n);
        if (n === 4) {
          throw 'four!';
        }
        return n;
      }),
      retry(3),
      //       retryWhen(errors =>
      //         errors.pipe(
      //           // log error message
      //           tap(val => console.log(`Value ${val} was too high!`)),
      //           // restart in 5 seconds
      // //delayWhen(val => timer(val * 1000))
      //         )
      //       ),
      catchError(err => {
        return of(this.fallback());
      })
    )
  }
  private fallback() {
    return 900;
  }


}
