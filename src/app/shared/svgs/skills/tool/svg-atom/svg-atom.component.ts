import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'app-svg-atom',
  templateUrl: './svg-atom.component.html',
  styleUrls: ['./svg-atom.component.scss'],
  standalone: true
})
export class SvgAtomComponent {
  @HostBinding('class') class = 'svg-skill';

  constructor() { }
}
