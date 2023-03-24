import { Component, HostBinding, OnInit } from '@angular/core';

@Component({
  selector: 'app-svg-compass',
  templateUrl: './svg-compass.component.html',
  styleUrls: ['./svg-compass.component.scss']
})
export class SvgCompassComponent implements OnInit {
  @HostBinding('class') class = 'svg-skill';

  constructor() { }

  ngOnInit(): void {
  }

}
