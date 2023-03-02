import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { InfosLanguagesModule } from '../side-panel/infos-languages/infos-languages.module';
import { InfosPersoModule } from '../side-panel/infos-perso/infos-perso.module';
import { InfosSkillsModule } from '../side-panel/infos-skills/infos-skills.module';
import { TopDescModule } from '../side-panel/top-desc/top-desc.module';
import { PageHomeRoutingModule } from './page-home-routing.module';
import { PageHomeComponent } from './page-home.component';

@NgModule({
  imports: [
    CommonModule,
    PageHomeRoutingModule,
    TopDescModule,
    InfosPersoModule,
    InfosLanguagesModule,
    InfosSkillsModule,
  ],
  exports: [PageHomeComponent],
  declarations: [PageHomeComponent],
})
export class PageHomeModule {}
