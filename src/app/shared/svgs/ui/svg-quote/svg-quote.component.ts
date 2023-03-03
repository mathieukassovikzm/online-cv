import { Component, HostBinding, OnInit } from '@angular/core';

@Component({
  selector: 'app-svg-quote',
  templateUrl: './svg-quote.component.html',
})
export class SvgQuoteComponent implements OnInit {
  @HostBinding('class') class = 'icon';

  constructor() {}

  ngOnInit(): void {}
}
