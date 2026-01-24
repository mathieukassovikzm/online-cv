import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'app-svg-visual-studio',
  templateUrl: './svg-visual-studio.component.html',
  styleUrls: ['./svg-visual-studio.component.scss'],
  standalone: true
})
export class SvgVisualStudioComponent {
  @HostBinding('class') class = 'svg-skill';

  constructor() { }
}
