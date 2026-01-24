import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'app-svg-sql-oracle',
  templateUrl: './svg-sql-oracle.component.html',
  styleUrls: ['./svg-sql-oracle.component.scss'],
  standalone: true
})
export class SvgSqlOracleComponent {
  @HostBinding('class') class = 'svg-skill';

  constructor() { }
}
