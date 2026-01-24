import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'app-svg-medal',
  templateUrl: './svg-medal.component.html',
  standalone: true
})
export class SvgMedalComponent {
  @HostBinding('class') class = 'icon';

  constructor() { }
}
