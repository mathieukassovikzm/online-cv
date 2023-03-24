import { Component, HostBinding, OnInit } from '@angular/core';

@Component({
  selector: 'app-svg-download',
  templateUrl: './svg-download.component.html',
})
export class SvgDownloadComponent implements OnInit {
  @HostBinding('class') class = 'icon';

  constructor() {}

  ngOnInit(): void {}
}
