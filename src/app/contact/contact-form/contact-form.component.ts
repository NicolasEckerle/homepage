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

  send() {
    const allInfo = `Mein Name ist ${this.name}. Meine E-mail lautet ${this.email}. Meine Naricht ist ${this.message}`;
    alert(allInfo);
  }

  confirmation() {
    const send_sucesfull = `${this.name} deine Naricht wurde erfolgreich versendet`;
    alert(send_sucesfull);
  }

  ngOnInit() {
  }

}
