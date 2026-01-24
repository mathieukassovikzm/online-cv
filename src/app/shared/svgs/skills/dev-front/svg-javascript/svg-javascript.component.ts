import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'app-svg-javascript',
  templateUrl: './svg-javascript.component.html',
  styleUrls: ['./svg-javascript.component.scss'],
  standalone: true
})
export class SvgJavascriptComponent {
  @HostBinding('class') class = 'svg-skill';

  constructor() { }
}
