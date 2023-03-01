import { Component, HostBinding, OnInit } from '@angular/core';

@Component({
  selector: 'app-svg-illustrator',
  templateUrl: './svg-illustrator.component.html',
  styleUrls: ['./svg-illustrator.component.scss']
})
export class SvgIllustratorComponent implements OnInit {
  @HostBinding('class') class = 'svg-skill';

  constructor() { }

  ngOnInit(): void {
  }

}
