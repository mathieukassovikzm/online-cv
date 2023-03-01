import { Component, HostBinding, OnInit } from '@angular/core';

@Component({
  selector: 'app-svg-susy',
  templateUrl: './svg-susy.component.html',
  styleUrls: ['./svg-susy.component.scss']
})
export class SvgSusyComponent implements OnInit {
  @HostBinding('class') class = 'svg-skill';

  constructor() { }

  ngOnInit(): void {
  }

}
