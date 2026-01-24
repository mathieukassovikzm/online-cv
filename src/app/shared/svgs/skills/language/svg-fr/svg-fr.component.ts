import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'app-svg-fr',
  templateUrl: './svg-fr.component.html',
  styleUrls: ['./svg-fr.component.scss'],
  standalone: true
})
export class SvgFrComponent {
  @HostBinding('class') class = 'svg-lang lang-fr';

  constructor() { }
}
