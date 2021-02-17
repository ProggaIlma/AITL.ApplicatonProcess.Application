import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {catchError} from 'rxjs/operators';
import {Observable, of} from 'rxjs';
import {Employee} from './model/employee';
import Swal from 'sweetalert2';
const localUrl = 'https://restcountries.eu/rest/v2/';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/xml',
    Authorization: 'jwt-token'
  })
};
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }
  // tslint:disable-next-line:typedef
  // getCountries() {
  //   return this.http.get(localUrl);
  // }

// tslint:disable-next-line:typedef
  getCountries() {
    return this.http.get<any[]>(localUrl).pipe(
      catchError(this.handleError<any[]>('getCountry', [])));
  }
  // tslint:disable-next-line:typedef
  addEmployee(employee: Employee): Observable<any> {
    return this.http.post<any>('', employee, httpOptions)
      .pipe(
        catchError(this.handleError('addEmployee', employee))
      );
  }
  // tslint:disable-next-line:typedef
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.log(error);
      this.log(`${operation} failed: ${error.message}`);
      // Swal.fire(error.message);
      return of(result as T);
    };
  }

  // tslint:disable-next-line:typedef
  private log(message: string) {
    console.log(message);
  }
}
