import { Component, HostBinding, OnInit } from '@angular/core';

@Component({
    selector: 'app-svg-photoshop',
    templateUrl: './svg-photoshop.component.html',
    styleUrls: ['./svg-photoshop.component.scss'],
    standalone: false
})
export class SvgPhotoshopComponent implements OnInit {
  @HostBinding('class') class = 'svg-skill';

  constructor() { }

  ngOnInit(): void {
  }

}
