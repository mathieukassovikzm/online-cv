import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'app-svg-sourcetree',
  templateUrl: './svg-sourcetree.component.html',
  styleUrls: ['./svg-sourcetree.component.scss'],
  standalone: true
})
export class SvgSourcetreeComponent {
  @HostBinding('class') class = 'svg-skill';

  constructor() { }
}
