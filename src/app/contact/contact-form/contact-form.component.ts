import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {

  public name: string;
  public email: string;
  public message: string;

  constructor() {
  }

  ngOnInit() {
  }

}
