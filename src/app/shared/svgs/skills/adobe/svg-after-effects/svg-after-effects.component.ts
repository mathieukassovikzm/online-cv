import { Component, HostBinding, OnInit } from '@angular/core';

@Component({
  selector: 'app-svg-after-effects',
  templateUrl: './svg-after-effects.component.html',
  styleUrls: ['./svg-after-effects.component.scss']
})
export class SvgAfterEffectsComponent implements OnInit {
  @HostBinding('class') class = 'svg-skill';

  constructor() { }

  ngOnInit(): void {
  }

}
