import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, retry, tap } from 'rxjs/operators';
import { User } from '../types/user.type';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  //service api
  public findAll(): Observable<User[]> {
    const url = `${environment.url}/users`;
    localStorage.setItem("url", url)
    return this.http.get<User[]>(url).pipe(
      retry(5),
      // catchError(() => of<User[]>([{ id: 0, name: 'foo' }])
      catchError(this.handleError<User[]>('findAll-users', this.fallback()))
    );
  }
  private fallback() {
    return [{ id: 0, name: 'foo' }];
  }

  findById(id: number): Observable<User> {
    const url = `${environment.url}/users/${id}`;
    return this.http.get<User>(url).pipe(
      tap(() => console.log(`fetched user id = ${id}`)),
      catchError(this.handleError<User>(`findByid id=${id}`))
    )
  }
  //generic error handler
  private handleError<T>(operation = "operation", result?: T) {
    return (error: any): Observable<T> => {
      //console.error(error);
      return of(result as T);
    }
  }
}
