import { Component, HostBinding, OnInit } from '@angular/core';

@Component({
    selector: 'app-svg-java',
    templateUrl: './svg-java.component.html',
    styleUrls: ['./svg-java.component.scss'],
    standalone: false
})
export class SvgJavaComponent implements OnInit {
  @HostBinding('class') class = 'svg-skill';

  constructor() { }

  ngOnInit() {
  }

}
