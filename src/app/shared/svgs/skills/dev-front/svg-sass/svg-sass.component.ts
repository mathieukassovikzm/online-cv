import { Component, HostBinding, OnInit } from '@angular/core';

@Component({
  selector: 'app-svg-sass',
  templateUrl: './svg-sass.component.html',
  styleUrls: ['./svg-sass.component.scss']
})
export class SvgSassComponent implements OnInit {
  @HostBinding('class') class = 'svg-skill';

  constructor() { }

  ngOnInit(): void {
  }

}
