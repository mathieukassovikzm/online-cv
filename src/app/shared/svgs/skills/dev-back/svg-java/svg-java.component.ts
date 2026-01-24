import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'app-svg-java',
  templateUrl: './svg-java.component.html',
  styleUrls: ['./svg-java.component.scss'],
  standalone: true
})
export class SvgJavaComponent {
  @HostBinding('class') class = 'svg-skill';

  constructor() { }
}
