import { Component, HostBinding, OnInit } from '@angular/core';

@Component({
  selector: 'app-svg-git',
  templateUrl: './svg-git.component.html',
  styleUrls: ['./svg-git.component.scss']
})
export class SvgGitComponent implements OnInit {
  @HostBinding('class') class = 'svg-skill';

  constructor() { }

  ngOnInit(): void {
  }

}
