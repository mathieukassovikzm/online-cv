import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'app-svg-arobase',
  templateUrl: './svg-arobase.component.html',
  standalone: true,
})
export class SvgArobaseComponent {
  @HostBinding('class') class = 'icon';

  constructor() { }
}
