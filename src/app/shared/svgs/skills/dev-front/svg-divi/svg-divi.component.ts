import { Component, HostBinding, OnInit } from '@angular/core';

@Component({
  selector: 'app-svg-divi',
  templateUrl: './svg-divi.component.html',
  styleUrls: ['./svg-divi.component.scss']
})
export class SvgDiviComponent implements OnInit {
  @HostBinding('class') class = 'svg-skill';

  constructor() { }

  ngOnInit(): void {
  }

}
