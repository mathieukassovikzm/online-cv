
import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'app-svg-after-effects',
  templateUrl: './svg-after-effects.component.html',
  styleUrls: ['./svg-after-effects.component.scss'],
  imports: [],
  standalone: true
})
export class SvgAfterEffectsComponent {
  @HostBinding('class') class = 'svg-skill';

  constructor() { }
}
