import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'app-svg-email',
  templateUrl: './svg-email.component.html',
  standalone: true
})
export class SvgEmailComponent {
  @HostBinding('class') class = 'icon';
  constructor() { }
}
