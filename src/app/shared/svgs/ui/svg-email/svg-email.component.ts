import { Component, HostBinding, OnInit } from '@angular/core';

@Component({
  selector: 'app-svg-email',
  templateUrl: './svg-email.component.html',
  styleUrls: ['./svg-email.component.scss']
})
export class SvgEmailComponent implements OnInit {
  @HostBinding('class') class = 'icon';
  constructor() { }

  ngOnInit(): void {
  }

}
