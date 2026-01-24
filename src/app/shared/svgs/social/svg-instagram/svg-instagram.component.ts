import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'app-svg-instagram',
  templateUrl: './svg-instagram.component.html',
  standalone: true
})
export class SvgInstagramComponent {
  @HostBinding('class') class = 'icon';
  constructor() { }
}
