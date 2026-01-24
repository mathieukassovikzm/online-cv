import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'app-svg-download',
  templateUrl: './svg-download.component.html',
  standalone: true,
})
export class SvgDownloadComponent {
  @HostBinding('class') class = 'icon';

  constructor() { }
}
