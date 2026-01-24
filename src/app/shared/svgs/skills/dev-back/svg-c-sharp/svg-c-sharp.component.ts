import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'app-svg-c-sharp',
  templateUrl: './svg-c-sharp.component.html',
  styleUrls: ['./svg-c-sharp.component.scss'],
  standalone: true
})
export class SvgCSharpComponent {
  @HostBinding('class') class = 'svg-skill';

  constructor() { }
}
