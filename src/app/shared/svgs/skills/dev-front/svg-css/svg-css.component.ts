import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'app-svg-css',
  templateUrl: './svg-css.component.html',
  styleUrls: ['./svg-css.component.scss'],
  standalone: true
})
export class SvgCssComponent {
  @HostBinding('class') class = 'svg-skill';

  constructor() { }
}
