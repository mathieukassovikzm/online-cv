import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'app-svg-typescript',
  templateUrl: './svg-typescript.component.html',
  styleUrls: ['./svg-typescript.component.scss'],
  standalone: true
})
export class SvgTypescriptComponent {
  @HostBinding('class') class = 'svg-skill';

  constructor() { }
}
