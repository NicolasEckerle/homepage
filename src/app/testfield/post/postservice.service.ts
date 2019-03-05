import {Injectable, OnInit} from '@angular/core';
import {Post} from './post';

@Injectable()
export class PostService implements OnInit {

  posts: Post[] = [];

  constructor() {
  }


  ngOnInit(): void {
  }


  addPost(text: string, author: string) {
    this.posts.push(new Post(text, author));
    console.log(this.posts.length);
  }

  getPosts() {
    return this.posts;
  }
} 
