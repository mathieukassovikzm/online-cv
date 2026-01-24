import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'app-svg-work',
  templateUrl: './svg-work.component.html',
  standalone: true
})
export class SvgWorkComponent {
  @HostBinding('class') class = 'icon';

  constructor() { }
}
