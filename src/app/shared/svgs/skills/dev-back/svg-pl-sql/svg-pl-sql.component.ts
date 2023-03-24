import { Component, HostBinding, OnInit } from '@angular/core';

@Component({
  selector: 'app-svg-pl-sql',
  templateUrl: './svg-pl-sql.component.html',
  styleUrls: ['./svg-pl-sql.component.scss']
})
export class SvgPlSqlComponent implements OnInit {
  @HostBinding('class') class = 'svg-skill';

  constructor() { }

  ngOnInit(): void {
  }

}
