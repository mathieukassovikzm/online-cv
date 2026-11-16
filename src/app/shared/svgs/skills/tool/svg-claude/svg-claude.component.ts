import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'app-svg-claude',
  templateUrl: './svg-claude.component.html',
  styleUrls: ['./svg-claude.component.scss'],
  standalone: true
})
export class SvgClaudeComponent {
  @HostBinding('class') class = 'svg-skill';

  constructor() { }
}
