import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'app-svg-c-plus-plus',
  templateUrl: './svg-c-plus-plus.component.html',
  styleUrls: ['./svg-c-plus-plus.component.scss'],
  standalone: true
})
export class SvgCPlusPlusComponent {
  @HostBinding('class') class = 'svg-skill';

  constructor() { }
}
