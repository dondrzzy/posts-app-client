import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { map, catchError } from 'rxjs/operators';
import { HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: Http) { }
  private options;
  private baseUrl = 'http://localhost:3000/api/v1';
  users = [];
  userProfile = {};

  private createAuthenticationHeaders = () => {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json')
    this.options = {headers}
  }

  private handleError = (operation: string, result?) => {
    return (error: any): Observable<any> => {
      console.log(`${operation} error`, error.status, error.json());
      return throwError(error);
    }
  }

  registerUser = (userData) => {
    this.createAuthenticationHeaders();
    return this.http.post(`${this.baseUrl}/users/register`, JSON.stringify(userData), this.options)
      .pipe(
        map(res => res.json()),
        catchError(this.handleError('registerUser')),
      )
  };

  loginUser = (user) => {
    this.createAuthenticationHeaders();
    this.http.post(`${this.baseUrl}/users/login`, JSON.stringify(user), this.options)
      .pipe(
        map(res => res.json()),
        catchError(this.handleError('loginUser')),
      )
      .subscribe(data => {
        console.log('data', data);
        if (data.success)
          localStorage.setItem('token', data.token);
      });
  }

  getUsers = () => {
    this.http.get(`${this.baseUrl}/users`)
      .pipe(
        map(res => res.json()),
        catchError(this.handleError('getUsers')),
      )
      .subscribe(data => this.users = data.users);
  }

  getProfile = (id) => {
    console.log('---', id);
    return this.http.get(`${this.baseUrl}/users/profile/${id}`)
      .pipe(
        map(res => res.json()),
        catchError(this.handleError('getProfile')),
      );
  }
};
