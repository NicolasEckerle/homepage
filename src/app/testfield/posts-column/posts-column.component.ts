import {Component, OnInit} from '@angular/core';
import {PostService} from '../post/postservice.service';

@Component({
  selector: 'app-posts-column',
  templateUrl: './posts-column.component.html',
  styleUrls: ['./posts-column.component.css']
})
export class PostsColumnComponent implements OnInit {

  name: string = 'Posts:';


  constructor(public postService: PostService) {

  }

  ngOnInit() {
  }

}
