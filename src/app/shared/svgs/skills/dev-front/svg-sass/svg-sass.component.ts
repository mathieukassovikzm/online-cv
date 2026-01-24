import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'app-svg-sass',
  templateUrl: './svg-sass.component.html',
  styleUrls: ['./svg-sass.component.scss'],
  standalone: true
})
export class SvgSassComponent {
  @HostBinding('class') class = 'svg-skill';

  constructor() { }
}
