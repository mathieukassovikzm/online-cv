import { Component, HostBinding, OnInit } from '@angular/core';

@Component({
  selector: 'app-svg-es',
  templateUrl: './svg-es.component.html',
  styleUrls: ['./svg-es.component.scss']
})
export class SvgEsComponent implements OnInit {
  @HostBinding('class') class = 'svg-lang';

  constructor() { }

  ngOnInit() {
  }

}
