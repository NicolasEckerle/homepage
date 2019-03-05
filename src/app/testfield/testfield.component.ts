import {Component, OnInit} from '@angular/core';
import {PostService} from './post/postservice.service';

@Component({
  selector: 'app-testfield',
  templateUrl: './testfield.component.html',
  styleUrls: ['./testfield.component.css']
})
export class TestfieldComponent implements OnInit {
  public name: string;
  public text: string;
  public postalt = '';
  public post: string;


  constructor(public postService: PostService) {

  }

  post_comment() {
    this.postalt = this.post;
    this.post = this.name + this.text;
  }


  ngOnInit() {
  }

}
