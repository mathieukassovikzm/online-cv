import { Component, HostBinding, OnInit } from '@angular/core';

@Component({
  selector: 'app-svg-medal',
  templateUrl: './svg-medal.component.html',
})
export class SvgMedalComponent implements OnInit {
  @HostBinding('class') class = 'icon';

  constructor() {}

  ngOnInit(): void {}
}
