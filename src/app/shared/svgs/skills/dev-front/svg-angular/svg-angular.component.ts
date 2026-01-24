import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'app-svg-angular',
  templateUrl: './svg-angular.component.html',
  styleUrls: ['./svg-angular.component.scss'],
  standalone: true
})
export class SvgAngularComponent {
  @HostBinding('class') class = 'svg-skill';

  constructor() { }
}
