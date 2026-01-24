import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'app-svg-html',
  templateUrl: './svg-html.component.html',
  styleUrls: ['./svg-html.component.scss'],
  standalone: true
})
export class SvgHtmlComponent {
  @HostBinding('class') class = 'svg-skill';

  constructor() { }
}
