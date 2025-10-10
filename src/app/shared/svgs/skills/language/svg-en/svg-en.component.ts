import { Component, HostBinding, OnInit } from '@angular/core';

@Component({
    selector: 'app-svg-en',
    templateUrl: './svg-en.component.html',
    styleUrls: ['./svg-en.component.scss'],
    standalone: false
})
export class SvgEnComponent implements OnInit {
  @HostBinding('class') class = 'svg-lang lang-en';

  constructor() { }

  ngOnInit() {
  }

}
