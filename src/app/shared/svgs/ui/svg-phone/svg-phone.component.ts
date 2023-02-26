import { Component, HostBinding, OnInit } from '@angular/core';

@Component({
  selector: 'app-svg-phone',
  templateUrl: './svg-phone.component.html',
  styleUrls: ['./svg-phone.component.scss'],
})
export class SvgPhoneComponent implements OnInit {
  @HostBinding('class') class = 'icon';
  constructor() {}

  ngOnInit(): void {}
}
