import { Component, HostBinding, OnInit } from '@angular/core';

@Component({
  selector: 'app-svg-typescript',
  templateUrl: './svg-typescript.component.html',
  styleUrls: ['./svg-typescript.component.scss']
})
export class SvgTypescriptComponent implements OnInit {
  @HostBinding('class') class = 'svg-skill';

  constructor() { }

  ngOnInit(): void {
  }

}
