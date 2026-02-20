import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'app-svg-person',
  templateUrl: './svg-person.component.html',
  standalone: true,
})
export class SvgPersonComponent {
  @HostBinding('class') class = 'icon';

  constructor() { }
}
