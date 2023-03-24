import { Component, HostBinding, OnInit } from '@angular/core';

@Component({
  selector: 'app-svg-vuejs',
  templateUrl: './svg-vuejs.component.html',
  styleUrls: ['./svg-vuejs.component.scss']
})
export class SvgVuejsComponent implements OnInit {
  @HostBinding('class') class = 'svg-skill';

  constructor() { }

  ngOnInit(): void {
  }

}
