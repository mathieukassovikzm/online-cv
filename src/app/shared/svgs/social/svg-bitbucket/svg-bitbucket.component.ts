import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'app-svg-bitbucket',
  templateUrl: './svg-bitbucket.component.html',
  standalone: true
})
export class SvgBitbucketComponent {
  @HostBinding('class') class = 'icon';
  constructor() { }
}
