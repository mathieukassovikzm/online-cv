import { Component, HostBinding, OnInit } from '@angular/core';

@Component({
  selector: 'app-svg-blazor',
  templateUrl: './svg-blazor.component.html',
  styleUrls: ['./svg-blazor.component.scss']
})
export class SvgBlazorComponent implements OnInit {
  @HostBinding('class') class = 'svg-skill';

  constructor() { }

  ngOnInit(): void {
  }

}
