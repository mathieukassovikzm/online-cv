import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { InfosLanguagesComponent } from './infos-languages/infos-languages.component';
import { InfosPersoComponent } from './infos-perso/infos-perso.component';
import { InfosSkillsComponent } from './infos-skills/infos-skills.component';
import { TopDescComponent } from './top-desc/top-desc.component';

const modules = [CommonModule];
const components = [TopDescComponent, InfosPersoComponent, InfosLanguagesComponent, InfosSkillsComponent];

@Component({
  selector: 'app-side-panel',
  templateUrl: './side-panel.component.html',
  styleUrls: ['./side-panel.component.scss'],
  imports: [...modules, ...components],
  standalone: true
})
export class SidePanelComponent {
  public isBannerInfosExtended = signal(false);
  constructor() { }

  public extendBannerInfos(): void {
    this.isBannerInfosExtended.set(!this.isBannerInfosExtended());
  }
}
