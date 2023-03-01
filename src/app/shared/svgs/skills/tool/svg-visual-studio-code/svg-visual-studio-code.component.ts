import { Component, HostBinding, OnInit } from '@angular/core';

@Component({
  selector: 'app-svg-visual-studio-code',
  templateUrl: './svg-visual-studio-code.component.html',
  styleUrls: ['./svg-visual-studio-code.component.scss']
})
export class SvgVisualStudioCodeComponent implements OnInit {
  @HostBinding('class') class = 'svg-skill';

  constructor() { }

  ngOnInit() {
  }

}
