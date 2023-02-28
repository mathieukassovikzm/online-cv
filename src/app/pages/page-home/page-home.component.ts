import { Component, OnInit } from '@angular/core';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-page-home',
  templateUrl: './page-home.component.html',
  styleUrls: ['./page-home.component.scss']
})
export class PageHomeComponent implements OnInit {

  constructor(public uiService: UiService) { }

  ngOnInit(): void {
  }

  curtainClicked(): void {
    this.uiService.toggleNavOpen();
  }
}
