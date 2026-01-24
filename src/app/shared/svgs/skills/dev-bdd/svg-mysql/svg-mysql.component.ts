import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'app-svg-mysql',
  templateUrl: './svg-mysql.component.html',
  styleUrls: ['./svg-mysql.component.scss'],
  standalone: true
})
export class SvgMysqlComponent {
  @HostBinding('class') class = 'svg-skill';

  constructor() { }
}
