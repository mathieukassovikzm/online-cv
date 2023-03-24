import { Component, HostBinding, OnInit } from '@angular/core';

@Component({
  selector: 'app-svg-sql-oracle',
  templateUrl: './svg-sql-oracle.component.html',
  styleUrls: ['./svg-sql-oracle.component.scss']
})
export class SvgSqlOracleComponent implements OnInit {
  @HostBinding('class') class = 'svg-skill';

  constructor() { }

  ngOnInit(): void {
  }

}
