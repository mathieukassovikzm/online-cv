import { Component, HostBinding, OnInit } from '@angular/core';

@Component({
  selector: 'app-svg-java',
  templateUrl: './svg-java.component.html',
  styleUrls: ['./svg-java.component.scss']
})
export class SvgJavaComponent implements OnInit {
  @HostBinding('class') class = 'svg-skill';

  constructor() { }

  ngOnInit() {
  }

}
