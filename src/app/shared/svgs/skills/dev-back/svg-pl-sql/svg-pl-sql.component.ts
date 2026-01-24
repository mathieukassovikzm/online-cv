import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'app-svg-pl-sql',
  templateUrl: './svg-pl-sql.component.html',
  styleUrls: ['./svg-pl-sql.component.scss'],
  standalone: true
})
export class SvgPlSqlComponent {
  @HostBinding('class') class = 'svg-skill';

  constructor() { }
}
