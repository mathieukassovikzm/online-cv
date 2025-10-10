import { Component, HostBinding, OnInit } from '@angular/core';

@Component({
    selector: 'app-svg-lightroom',
    templateUrl: './svg-lightroom.component.html',
    styleUrls: ['./svg-lightroom.component.scss'],
    standalone: false
})
export class SvgLightroomComponent implements OnInit {
  @HostBinding('class') class = 'svg-skill';

  constructor() { }

  ngOnInit(): void {
  }

}
