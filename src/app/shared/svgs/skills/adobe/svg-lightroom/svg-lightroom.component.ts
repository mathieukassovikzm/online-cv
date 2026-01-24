import { CommonModule } from '@angular/common';
import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'app-svg-lightroom',
  templateUrl: './svg-lightroom.component.html',
  styleUrls: ['./svg-lightroom.component.scss'],
  imports: [CommonModule],
  standalone: true,
})
export class SvgLightroomComponent {
  @HostBinding('class') class = 'svg-skill';

  constructor() { }
}
