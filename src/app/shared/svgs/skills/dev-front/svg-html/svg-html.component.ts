import { Component, HostBinding, OnInit } from '@angular/core';

@Component({
  selector: 'app-svg-html',
  templateUrl: './svg-html.component.html',
  styleUrls: ['./svg-html.component.scss']
})
export class SvgHtmlComponent implements OnInit {
  @HostBinding('class') class = 'svg-skill';

  constructor() { }

  ngOnInit(): void {
  }

}
