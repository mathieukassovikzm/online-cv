import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'app-svg-es',
  templateUrl: './svg-es.component.html',
  styleUrls: ['./svg-es.component.scss'],
  standalone: true
})
export class SvgEsComponent {
  @HostBinding('class') class = 'svg-lang lang-es';

  constructor() { }
}
