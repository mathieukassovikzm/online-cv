import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'app-svg-gitkraken',
  templateUrl: './svg-gitkraken.component.html',
  styleUrls: ['./svg-gitkraken.component.scss'],
  standalone: true
})
export class SvgGitkrakenComponent {
  @HostBinding('class') class = 'svg-skill';

  constructor() { }
}
