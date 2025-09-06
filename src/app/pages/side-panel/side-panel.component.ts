import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-panel',
  templateUrl: './side-panel.component.html',
  styleUrls: ['./side-panel.component.scss'],
})
export class SidePanelComponent implements OnInit {
  public isBannerInfosExtended = false;
  constructor() {}
  ngOnInit(): void {}

  public extendBannerInfos(): void {
    this.isBannerInfosExtended = !this.isBannerInfosExtended;
  }
}
