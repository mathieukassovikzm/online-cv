import { Component, HostBinding, OnInit } from '@angular/core';

@Component({
  selector: 'app-svg-c-plus-plus',
  templateUrl: './svg-c-plus-plus.component.html',
  styleUrls: ['./svg-c-plus-plus.component.scss']
})
export class SvgCPlusPlusComponent implements OnInit {
  @HostBinding('class') class = 'svg-skill';

  constructor() { }

  ngOnInit() {
  }

}
