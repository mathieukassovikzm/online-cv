import { Component, HostBinding, OnInit } from '@angular/core';

@Component({
  selector: 'app-svg-wordpress',
  templateUrl: './svg-wordpress.component.html',
  styleUrls: ['./svg-wordpress.component.scss']
})
export class SvgWordpressComponent implements OnInit {
  @HostBinding('class') class = 'svg-skill';

  constructor() { }

  ngOnInit(): void {
  }

}
