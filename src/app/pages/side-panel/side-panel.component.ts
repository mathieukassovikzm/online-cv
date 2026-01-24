import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SvgDownloadComponent } from 'src/app/shared/svgs/ui/svg-download/svg-download.component';
import { InfosLanguagesComponent } from './infos-languages/infos-languages.component';
import { InfosPersoComponent } from './infos-perso/infos-perso.component';
import { InfosSkillsComponent } from './infos-skills/infos-skills.component';
import { TopDescComponent } from './top-desc/top-desc.component';

const modules = [CommonModule];
const components = [TopDescComponent, InfosPersoComponent, InfosLanguagesComponent, InfosSkillsComponent];
const svgs = [SvgDownloadComponent];

@Component({
  selector: 'app-side-panel',
  templateUrl: './side-panel.component.html',
  styleUrls: ['./side-panel.component.scss'],
  imports: [...modules, ...svgs, ...components],
  standalone: true
})
export class SidePanelComponent {
  public isBannerInfosExtended = false;
  constructor() { }

  public extendBannerInfos(): void {
    this.isBannerInfosExtended = !this.isBannerInfosExtended;
  }
}
