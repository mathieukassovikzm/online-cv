import { Component, HostBinding, OnInit } from '@angular/core';

@Component({
  selector: 'app-svg-visual-studio',
  templateUrl: './svg-visual-studio.component.html',
  styleUrls: ['./svg-visual-studio.component.scss']
})
export class SvgVisualStudioComponent implements OnInit {
  @HostBinding('class') class = 'svg-skill';

  constructor() { }

  ngOnInit() {
  }

}
