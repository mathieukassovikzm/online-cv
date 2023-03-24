import { Component, HostBinding, OnInit } from '@angular/core';

@Component({
  selector: 'app-svg-fr',
  templateUrl: './svg-fr.component.html',
  styleUrls: ['./svg-fr.component.scss']
})
export class SvgFrComponent implements OnInit {
  @HostBinding('class') class = 'svg-lang';

  constructor() { }

  ngOnInit() {
  }

}
