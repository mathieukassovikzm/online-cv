import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'app-svg-phone',
  templateUrl: './svg-phone.component.html',
  standalone: true
})
export class SvgPhoneComponent {
  @HostBinding('class') class = 'icon';
  constructor() { }
}
