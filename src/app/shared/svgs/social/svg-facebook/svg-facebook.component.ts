import { Component, HostBinding, OnInit } from '@angular/core';

@Component({
  selector: 'app-svg-facebook',
  templateUrl: './svg-facebook.component.html',
})
export class SvgFacebookComponent implements OnInit {
  @HostBinding('class') class = 'icon';
  constructor() {}

  ngOnInit(): void {}
}
