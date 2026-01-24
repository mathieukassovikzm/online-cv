import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'app-svg-blazor',
  templateUrl: './svg-blazor.component.html',
  styleUrls: ['./svg-blazor.component.scss'],
  standalone: true
})
export class SvgBlazorComponent {
  @HostBinding('class') class = 'svg-skill';
  constructor() { }
}
