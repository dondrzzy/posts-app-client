import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Http } from '@angular/http';
import { Post } from '../interfaces/post';


@Injectable()
export class PostService {

  constructor(private http: Http) { }
  posts = []

  getPosts = () => {
    return this.http.get('http://localhost:3000/posts')
      .pipe(map(res => res.json()))
      .subscribe(data => {
        this.posts = data.posts;
      });
  }
}
