import {Injectable, OnInit} from '@angular/core';
import {SnakeText} from './snaketext';


@Injectable()
export class SnakeTextService implements OnInit {

  public snaketext: SnakeText = new SnakeText('Nachdem ich zufällig auf die Library p5.js zur Erstellung von interaktiven Grafiken gestoßen bin, überkam mich das Bedürfnis diese in Angular 7 zu implementieren. Das Resultat hierbei war ein kleines Game, welches Sie gerne hier testen können.');

  constructor() {
  }


  ngOnInit(): void {

  }

  getSnakeText() {
    return this.snaketext;
  }

} 
