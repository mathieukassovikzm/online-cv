import { Component, HostBinding, OnInit } from '@angular/core';

@Component({
  selector: 'app-svg-css',
  templateUrl: './svg-css.component.html',
  styleUrls: ['./svg-css.component.scss']
})
export class SvgCssComponent implements OnInit {
  @HostBinding('class') class = 'svg-skill';

  constructor() { }

  ngOnInit(): void {
  }

}
