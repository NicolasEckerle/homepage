import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-calc-epoxy',
  templateUrl: './calc-epoxy.component.html',
  styleUrls: ['./calc-epoxy.component.css']
})
export class CalcEpoxyComponent implements OnInit {

  public width: number;
  public height: number;
  public length: number;
  public result: number;
  public zwresult: number;
  public multiplyer = 1.09;

  constructor() {
  }

  cal_epoxy() {
    this.zwresult = this.width * this.height * this.length * this.multiplyer;
    this.result = this.zwresult / 1000;
  }

  ngOnInit() {
  }

}
