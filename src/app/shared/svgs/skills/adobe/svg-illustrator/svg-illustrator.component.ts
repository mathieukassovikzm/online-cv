
import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'app-svg-illustrator',
  templateUrl: './svg-illustrator.component.html',
  styleUrls: ['./svg-illustrator.component.scss'],
  imports: [],
  standalone: true
})
export class SvgIllustratorComponent {
  @HostBinding('class') class = 'svg-skill';

  constructor() { }
}

