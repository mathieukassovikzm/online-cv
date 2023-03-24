import { Component, HostBinding, OnInit } from '@angular/core';

@Component({
  selector: 'app-svg-svn',
  templateUrl: './svg-svn.component.html',
  styleUrls: ['./svg-svn.component.scss']
})
export class SvgSvnComponent implements OnInit {
  @HostBinding('class') class = 'svg-skill';

  constructor() { }

  ngOnInit() {
  }

}
