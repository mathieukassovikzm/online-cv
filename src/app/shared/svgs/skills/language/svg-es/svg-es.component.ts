import { Component, HostBinding, OnInit } from '@angular/core';

@Component({
    selector: 'app-svg-es',
    templateUrl: './svg-es.component.html',
    styleUrls: ['./svg-es.component.scss'],
    standalone: false
})
export class SvgEsComponent implements OnInit {
  @HostBinding('class') class = 'svg-lang lang-es';

  constructor() { }

  ngOnInit() {
  }

}
