import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'app-svg-info',
  templateUrl: './svg-info.component.html',
  standalone: true
})
export class SvgInfoComponent {
  @HostBinding('class') class = 'icon';

  constructor() { }
}
