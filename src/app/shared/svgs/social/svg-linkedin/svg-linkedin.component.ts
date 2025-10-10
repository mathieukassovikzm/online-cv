import { Component, HostBinding, OnInit } from '@angular/core';

@Component({
    selector: 'app-svg-linkedin',
    templateUrl: './svg-linkedin.component.html',
    standalone: false
})
export class SvgLinkedinComponent implements OnInit {
  @HostBinding('class') class = 'icon';
  constructor() {}

  ngOnInit(): void {}
}
