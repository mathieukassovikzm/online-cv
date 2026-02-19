
import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'app-svg-photoshop',
  templateUrl: './svg-photoshop.component.html',
  styleUrls: ['./svg-photoshop.component.scss'],
  imports: [],
  standalone: true
})
export class SvgPhotoshopComponent {
  @HostBinding('class') class = 'svg-skill';

  constructor() { }
}
