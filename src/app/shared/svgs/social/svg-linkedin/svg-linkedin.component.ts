import { Component, HostBinding, OnInit } from '@angular/core';

@Component({
    selector: 'app-svg-linkedin',
    templateUrl: './svg-linkedin.component.html',
    standalone: true
})
export class SvgLinkedinComponent {
  @HostBinding('class') class = 'icon';
  constructor() {}
}
