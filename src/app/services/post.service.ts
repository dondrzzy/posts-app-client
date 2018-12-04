import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Http, Headers } from '@angular/http';
import { Post } from '../interfaces/post';
import { HttpErrorResponse } from '@angular/common/http';


@Injectable()
export class PostService {

  constructor(private http: Http) { }

  private baseUrl = 'http://localhost:3000/api/v1';
  private options;
  posts: Post[] = [];
  
  private createAuthenticationHeaders = () => {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    this.options = {headers};
  };

  private handleError = (operation: string, result?) => {
    return (error: any): Observable<any> => {
      console.log(`${operation} error`, error.status, error.json());
      return throwError(error);
    }
  };

  getPosts = () => {
    return this.http.get(`${this.baseUrl}/posts`)
      .pipe(
        map(res => res.json()),
        catchError(this.handleError('getPosts')),
      )
      .subscribe(data => {
        this.posts = data.posts;
      });
  }

  postMessage = (post: Post) => {
    this.createAuthenticationHeaders();
    return this.http.post(`${this.baseUrl}/posts`, JSON.stringify(post), this.options)
      .pipe(
        map(res => res.json()),
        catchError(this.handleError('createPost')),
      );
  }
}
