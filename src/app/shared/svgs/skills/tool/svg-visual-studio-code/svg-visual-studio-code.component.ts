import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'app-svg-visual-studio-code',
  templateUrl: './svg-visual-studio-code.component.html',
  styleUrls: ['./svg-visual-studio-code.component.scss'],
  standalone: true
})
export class SvgVisualStudioCodeComponent {
  @HostBinding('class') class = 'svg-skill';

  constructor() { }
}
