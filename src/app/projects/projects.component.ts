import {Component, OnInit} from '@angular/core';
import {NgxGalleryAnimation, NgxGalleryImage, NgxGalleryOptions} from 'ngx-gallery';
import {TextService} from '../textservice.service';
import {Text} from './text';
import {SnakeText} from './snake/snaketext';
import {SnakeTextService} from './snake/snaketextservice.service';


@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  p5;
  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];
  galleryImages2: NgxGalleryImage[];
  public text: Text;
  public snaketext: SnakeText;

  constructor(public textservice: TextService, public snaketextservice: SnakeTextService) {
  }

  ngOnInit(): void {

    this.text = this.textservice.getText();
    this.snaketext = this.snaketextservice.getSnakeText();
    this.galleryOptions = [
      {
        width: '555px',
        height: '350px',
        thumbnailsColumns: 4,
        imageAnimation: NgxGalleryAnimation.Slide
      },
      // max-width 800
      {
        breakpoint: 800,
        width: '100%',
        height: '600px',
        imagePercent: 80,
        thumbnailsPercent: 20,
        thumbnailsMargin: 20,
        thumbnailMargin: 20
      },
      // max-width 400
      {
        breakpoint: 400,
        preview: false
      }
    ];

    this.galleryImages = [
      {
        small: 'assets/1-small.jpg',
        medium: 'assets/1-medium.jpg',
        big: 'assets/1-big.jpg'
      },
      {
        small: 'assets/2-small.jpg',
        medium: 'assets/2-medium.jpg',
        big: 'assets/2-big.jpg'
      },
      {
        small: 'assets/3-small.jpg',
        medium: 'assets/3-medium.jpg',
        big: 'assets/3-big.jpg'
      },
      {
        small: 'assets/4-small.jpg',
        medium: 'assets/4-medium.jpg',
        big: 'assets/4-big.jpg'
      }
    ];
    this.galleryImages2 = [
      {
        small: 'assets/7-small.jpg',
        medium: 'assets/7-medium.jpg',
        big: 'assets/7-big.jpg'
      },
      {
        small: 'assets/6-small.jpg',
        medium: 'assets/6-medium.jpg',
        big: 'assets/6-big.jpg'
      },
      {
        small: 'assets/5-small.jpg',
        medium: 'assets/5-medium.jpg',
        big: 'assets/5-big.jpg'
      },
      {
        small: 'assets/8-small.jpg',
        medium: 'assets/8-medium.jpg',
        big: 'assets/8-big.jpg'
      }
    ];
  }
}

