import { Component, HostBinding, OnInit } from '@angular/core';

@Component({
  selector: 'app-svg-jquery',
  templateUrl: './svg-jquery.component.html',
  styleUrls: ['./svg-jquery.component.scss']
})
export class SvgJqueryComponent implements OnInit {
  @HostBinding('class') class = 'svg-skill';

  constructor() { }

  ngOnInit(): void {
  }

}
