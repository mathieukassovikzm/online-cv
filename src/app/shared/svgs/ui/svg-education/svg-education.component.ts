import { Component, HostBinding, OnInit } from '@angular/core';

@Component({
  selector: 'app-svg-education',
  templateUrl: './svg-education.component.html',
})
export class SvgEducationComponent implements OnInit {
  @HostBinding('class') class = 'icon';

  constructor() {}

  ngOnInit(): void {}
}
