import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { InfosLanguagesModule } from './infos-languages/infos-languages.module';
import { InfosPersoModule } from './infos-perso/infos-perso.module';
import { InfosSkillsModule } from './infos-skills/infos-skills.module';
import { SidePanelComponent } from './side-panel.component';
import { TopDescModule } from './top-desc/top-desc.module';

@NgModule({
  imports: [
    CommonModule,
    TopDescModule,
    InfosPersoModule,
    InfosLanguagesModule,
    InfosSkillsModule,
  ],
  exports: [SidePanelComponent],
  declarations: [SidePanelComponent],
})
export class SidePanelModule {}
