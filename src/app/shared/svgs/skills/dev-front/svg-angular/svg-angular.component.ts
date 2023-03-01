import { Component, HostBinding, OnInit } from '@angular/core';

@Component({
  selector: 'app-svg-angular',
  templateUrl: './svg-angular.component.html',
  styleUrls: ['./svg-angular.component.scss']
})
export class SvgAngularComponent implements OnInit {
  @HostBinding('class') class = 'svg-skill';

  constructor() { }

  ngOnInit(): void {
  }

}
