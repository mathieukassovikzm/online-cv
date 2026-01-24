import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'app-svg-jquery',
  templateUrl: './svg-jquery.component.html',
  styleUrls: ['./svg-jquery.component.scss'],
  standalone: true
})
export class SvgJqueryComponent {
  @HostBinding('class') class = 'svg-skill';

  constructor() { }
}
