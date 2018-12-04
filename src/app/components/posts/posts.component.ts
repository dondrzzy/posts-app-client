import { Component, OnInit } from '@angular/core';
import { PostService } from './../../services/post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  constructor(private postService: PostService) { }

  formTitle = 'New Post';
  submitBtnValue = 'Post'
  postData = {
    message: '',
  };
  inputs = [
    {
      name: 'message',
      type: 'text',
      placeholder: 'post message',
    },
  ];

  ngOnInit() {
    this.postService.getPosts();
  }

  postMessage  = ($event) => {
    this.postService.postMessage($event)
      .subscribe(res => console.log(res));
  }

}
