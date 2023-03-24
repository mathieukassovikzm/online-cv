import { Component, HostBinding, OnInit } from '@angular/core';

@Component({
  selector: 'app-svg-sourcetree',
  templateUrl: './svg-sourcetree.component.html',
  styleUrls: ['./svg-sourcetree.component.scss']
})
export class SvgSourcetreeComponent implements OnInit {
  @HostBinding('class') class = 'svg-skill';

  constructor() { }

  ngOnInit() {
  }

}
