import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'app-svg-compass',
  templateUrl: './svg-compass.component.html',
  styleUrls: ['./svg-compass.component.scss'],
  standalone: true
})
export class SvgCompassComponent {
  @HostBinding('class') class = 'svg-skill';

  constructor() { }
}
