import { Component, HostBinding, OnInit } from '@angular/core';

@Component({
  selector: 'app-svg-mysql',
  templateUrl: './svg-mysql.component.html',
  styleUrls: ['./svg-mysql.component.scss']
})
export class SvgMysqlComponent implements OnInit {
  @HostBinding('class') class = 'svg-skill';

  constructor() { }

  ngOnInit() {
  }

}
