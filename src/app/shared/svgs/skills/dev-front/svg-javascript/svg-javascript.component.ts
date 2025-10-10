import { Component, HostBinding, OnInit } from '@angular/core';

@Component({
    selector: 'app-svg-javascript',
    templateUrl: './svg-javascript.component.html',
    styleUrls: ['./svg-javascript.component.scss'],
    standalone: false
})
export class SvgJavascriptComponent implements OnInit {
  @HostBinding('class') class = 'svg-skill';

  constructor() { }

  ngOnInit(): void {
  }

}
