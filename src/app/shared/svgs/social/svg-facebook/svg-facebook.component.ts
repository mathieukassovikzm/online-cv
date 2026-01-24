import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'app-svg-facebook',
  templateUrl: './svg-facebook.component.html',
  standalone: true
})
export class SvgFacebookComponent {
  @HostBinding('class') class = 'icon';
  constructor() { }
}
