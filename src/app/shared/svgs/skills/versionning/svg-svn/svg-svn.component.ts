import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'app-svg-svn',
  templateUrl: './svg-svn.component.html',
  styleUrls: ['./svg-svn.component.scss'],
  standalone: true,
})
export class SvgSvnComponent {
  @HostBinding('class') class = 'svg-skill';

  constructor() { }
}
