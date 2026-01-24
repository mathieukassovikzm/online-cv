import { CommonModule } from '@angular/common';
import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'app-svg-premiere-pro',
  templateUrl: './svg-premiere-pro.component.html',
  styleUrls: ['./svg-premiere-pro.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class SvgPremiereProComponent {
  @HostBinding('class') class = 'svg-skill';

  constructor() { }
}
