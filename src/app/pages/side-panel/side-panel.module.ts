import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SvgDownloadModule } from 'src/app/shared/svgs/ui/svg-download/svg-download.module';
import { InfosLanguagesModule } from './infos-languages/infos-languages.module';
import { InfosPersoModule } from './infos-perso/infos-perso.module';
import { InfosSkillsModule } from './infos-skills/infos-skills.module';
import { SidePanelComponent } from './side-panel.component';
import { TopDescModule } from './top-desc/top-desc.module';

const components = [
  TopDescModule,
  InfosPersoModule,
  InfosLanguagesModule,
  InfosSkillsModule,
];
const svgs = [SvgDownloadModule];

@NgModule({
  imports: [CommonModule, ...components, ...svgs],
  exports: [SidePanelComponent],
  declarations: [SidePanelComponent],
})
export class SidePanelModule {}
