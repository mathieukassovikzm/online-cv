import { Component, HostBinding, OnInit } from '@angular/core';

@Component({
  selector: 'app-svg-c-sharp',
  templateUrl: './svg-c-sharp.component.html',
  styleUrls: ['./svg-c-sharp.component.scss']
})
export class SvgCSharpComponent implements OnInit {
  @HostBinding('class') class = 'svg-skill';

  constructor() { }

  ngOnInit(): void {
  }

}
