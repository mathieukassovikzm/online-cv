import { Component, HostBinding, OnInit } from '@angular/core';

@Component({
  selector: 'app-svg-github',
  templateUrl: './svg-github.component.html',
})
export class SvgGithubComponent implements OnInit {
  @HostBinding('class') class = 'icon';
  constructor() {}

  ngOnInit(): void {}
}
