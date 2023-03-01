import { Component, HostBinding, OnInit } from '@angular/core';

@Component({
  selector: 'app-svg-en',
  templateUrl: './svg-en.component.html',
  styleUrls: ['./svg-en.component.scss']
})
export class SvgEnComponent implements OnInit {
  @HostBinding('class') class = 'svg-lang';

  constructor() { }

  ngOnInit() {
  }

}
