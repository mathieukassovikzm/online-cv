import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'app-svg-education',
  templateUrl: './svg-education.component.html',
  standalone: true
})
export class SvgEducationComponent {
  @HostBinding('class') class = 'icon';

  constructor() { }
}
