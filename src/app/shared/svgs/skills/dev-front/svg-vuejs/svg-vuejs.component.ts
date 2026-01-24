import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'app-svg-vuejs',
  templateUrl: './svg-vuejs.component.html',
  styleUrls: ['./svg-vuejs.component.scss'],
  standalone: true
})
export class SvgVuejsComponent {
  @HostBinding('class') class = 'svg-skill';

  constructor() { }
}
