import { Component, HostBinding, OnInit } from '@angular/core';

@Component({
  selector: 'app-svg-info',
  templateUrl: './svg-info.component.html',
  styleUrls: ['./svg-info.component.scss']
})
export class SvgInfoComponent implements OnInit {
  @HostBinding('class') class = 'icon';

  constructor() { }

  ngOnInit(): void {
  }

}
