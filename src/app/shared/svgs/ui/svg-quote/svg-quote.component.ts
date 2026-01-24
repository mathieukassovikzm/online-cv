import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'app-svg-quote',
  templateUrl: './svg-quote.component.html',
  standalone: true
})
export class SvgQuoteComponent {
  @HostBinding('class') class = 'icon';

  constructor() { }
}
