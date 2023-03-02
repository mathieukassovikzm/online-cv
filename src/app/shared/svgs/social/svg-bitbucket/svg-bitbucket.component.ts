import { Component, HostBinding, OnInit } from '@angular/core';

@Component({
  selector: 'app-svg-bitbucket',
  templateUrl: './svg-bitbucket.component.html',
})
export class SvgBitbucketComponent implements OnInit {
  @HostBinding('class') class = 'icon';
  constructor() {}

  ngOnInit(): void {}
}
