import { Component, HostBinding, OnInit } from '@angular/core';

@Component({
    selector: 'app-svg-gitkraken',
    templateUrl: './svg-gitkraken.component.html',
    styleUrls: ['./svg-gitkraken.component.scss'],
    standalone: false
})
export class SvgGitkrakenComponent implements OnInit {
  @HostBinding('class') class = 'svg-skill';

  constructor() { }

  ngOnInit() {
  }

}
