import { Component, HostBinding, OnInit } from '@angular/core';

@Component({
  selector: 'app-svg-atom',
  templateUrl: './svg-atom.component.html',
  styleUrls: ['./svg-atom.component.scss']
})
export class SvgAtomComponent implements OnInit {
  @HostBinding('class') class = 'svg-skill';

  constructor() { }

  ngOnInit() {
  }

}
