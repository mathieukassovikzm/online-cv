import { Component, HostBinding, OnInit } from '@angular/core';

@Component({
    selector: 'app-svg-premiere-pro',
    templateUrl: './svg-premiere-pro.component.html',
    styleUrls: ['./svg-premiere-pro.component.scss'],
    standalone: false
})
export class SvgPremiereProComponent implements OnInit {
  @HostBinding('class') class = 'svg-skill';

  constructor() { }

  ngOnInit(): void {
  }

}
