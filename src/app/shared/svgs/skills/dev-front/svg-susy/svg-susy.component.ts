import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'app-svg-susy',
  templateUrl: './svg-susy.component.html',
  styleUrls: ['./svg-susy.component.scss'],
  standalone: true
})
export class SvgSusyComponent {
  @HostBinding('class') class = 'svg-skill';

  constructor() { }
}
