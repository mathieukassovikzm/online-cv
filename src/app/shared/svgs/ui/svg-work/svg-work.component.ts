import { Component, HostBinding, OnInit } from '@angular/core';

@Component({
  selector: 'app-svg-work',
  templateUrl: './svg-work.component.html',
  styleUrls: ['./svg-work.component.scss']
})
export class SvgWorkComponent implements OnInit {
  @HostBinding('class') class = 'icon';

  constructor() { }

  ngOnInit(): void {
  }

}
