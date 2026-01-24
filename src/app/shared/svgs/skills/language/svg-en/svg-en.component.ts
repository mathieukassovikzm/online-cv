import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'app-svg-en',
  templateUrl: './svg-en.component.html',
  styleUrls: ['./svg-en.component.scss'],
  standalone: true
})
export class SvgEnComponent {
  @HostBinding('class') class = 'svg-lang lang-en';

  constructor() { }
}
