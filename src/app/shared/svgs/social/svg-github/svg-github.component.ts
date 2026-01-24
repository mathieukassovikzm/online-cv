import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'app-svg-github',
  templateUrl: './svg-github.component.html',
  standalone: true
})
export class SvgGithubComponent {
  @HostBinding('class') class = 'icon';
  constructor() { }
}
