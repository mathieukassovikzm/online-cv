import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'app-svg-wordpress',
  templateUrl: './svg-wordpress.component.html',
  styleUrls: ['./svg-wordpress.component.scss'],
  standalone: true
})
export class SvgWordpressComponent {
  @HostBinding('class') class = 'svg-skill';

  constructor() { }
}
