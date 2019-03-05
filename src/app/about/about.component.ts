import {Component, OnInit} from '@angular/core';
import {AboutText} from './abouttext';
import {TextService} from '../textservice.service';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  public about: AboutText;

  constructor(public textService: TextService) {
  }

  ngOnInit() {
    this.about = this.textService.getAbout();
  }

}


