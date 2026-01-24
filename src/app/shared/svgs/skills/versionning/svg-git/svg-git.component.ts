import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'app-svg-git',
  templateUrl: './svg-git.component.html',
  styleUrls: ['./svg-git.component.scss'],
  standalone: true,
})
export class SvgGitComponent {
  @HostBinding('class') class = 'svg-skill';

  constructor() { }
}
