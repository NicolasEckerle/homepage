import {Component, OnInit} from '@angular/core';
import * as p5 from 'p5';


@Component({
  selector: 'app-snake',
  templateUrl: './snake.component.html',
  styleUrls: ['./snake.component.css']
})
export class SnakeComponent implements OnInit {

  p5;


  constructor() {
  }

  ngOnInit(): void {

    this.createCanvas();
  }

  private createCanvas() {
    this.p5 = new p5(this.sketch);
  }


  private sketch(p: any) {
    var s;
    var scl = 20;
    var food;

    p.setup = () => {
      var canvas = p.createCanvas(1300, 600);
      p.createGraphics();
      s = new snake;
      canvas.parent('sketch-holder');
      p.frameRate(11);
      checklocation();
    };

    p.draw = () => {
      p.background(70);
      s.update();
      s.show();
      s.kill();

      if (s.eat(food)) {
        checklocation();
      }

      p.fill(100, 100, 255);
      p.rect(food.x, food.y, scl, scl);
    };


    p.keyPressed = () => {
      if (p.keyCode === p.UP_ARROW) {
        s.dir(0, -1);
      } else if (p.keyCode === p.DOWN_ARROW) {
        s.dir(0, 1);
      } else if (p.keyCode === p.RIGHT_ARROW) {
        s.dir(1, 0);
      } else if (p.keyCode === p.LEFT_ARROW) {
        s.dir(-1, 0);
      }
    };

    function checklocation() {
      var cols = p.floor(p.width / scl);
      var row = p.floor(p.height / scl);
      food = p.createVector(p.floor(p.random(cols)), p.floor(p.random(row)));
      food.mult(scl);

    }

    function snake() {
      this.x = 0;
      this.y = 1;
      this.xspeed = 1;
      this.yspeed = 0;
      this.big = 0;
      this.tail = [];

      this.eat = function(pos) {
        var d = p.dist(this.x, this.y, pos.x, pos.y);
        if (d < 2) {
          this.big++;
          return true;
        } else {
          return false;
        }
      };

      this.kill = function() {
        for (var i = 0; i < this.tail.length; i++) {
          var pos = this.tail[i];
          var d = p.dist(this.x, this.y, pos.x, pos.y);
          if (d < 2) {
            alert('GAME OVER');
            this.big = 0;
            this.tail = [];
          }
        }
      };

      this.dir = function(x, y) {
        this.xspeed = x;
        this.yspeed = y;
      };

      this.update = function() {
        if (this.big === this.tail.length) {
          for (var i = 0; i < this.tail.length - 1; i++) {
            this.tail[i] = this.tail[i + 1];
          }
        }

        this.tail[this.big - 1] = p.createVector(this.x, this.y);

        this.x = this.x + this.xspeed * scl;
        this.y = this.y + this.yspeed * scl;

        this.x = p.constrain(this.x, 0, p.width - scl);
        this.y = p.constrain(this.y, 0, p.height - scl);
      };
      this.show = function() {
        p.fill(255);
        for (var i = 0; i < this.big; i++) {
          p.rect(this.tail[i].x, this.tail[i].y, scl, scl);
        }
        p.rect(this.x, this.y, scl, scl);
      };
    }
  }
}
