import { Component, HostBinding, OnInit } from '@angular/core';

@Component({
  selector: 'app-svg-instagram',
  templateUrl: './svg-instagram.component.html',
})
export class SvgInstagramComponent implements OnInit {
  @HostBinding('class') class = 'icon';
  constructor() {}

  ngOnInit(): void {}
}
