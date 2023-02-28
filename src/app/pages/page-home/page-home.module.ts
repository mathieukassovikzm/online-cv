import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PageArchievementsModule } from '../page-archievements/page-archievements.module';
import { PageEducationModule } from '../page-education/page-education.module';
import { PageExtractModule } from '../page-extract/page-extract.module';
import { PageSkillsModule } from '../page-skills/page-skills.module';
import { PageHomeRoutingModule } from './page-home-routing.module';
import { PageHomeComponent } from './page-home.component';
import { TopDescModule } from '../side-panel/top-desc/top-desc.module';
import { InfosPersoModule } from '../side-panel/infos-perso/infos-perso.module';
import { InfosLanguagesModule } from '../side-panel/infos-languages/infos-languages.module';

@NgModule({
  imports: [
    CommonModule,
    PageHomeRoutingModule,
    TopDescModule,
    InfosPersoModule,
    InfosLanguagesModule,
    PageEducationModule,
    PageSkillsModule,
    PageExtractModule,
    PageArchievementsModule
  ],
  exports: [PageHomeComponent],
  declarations: [PageHomeComponent]
})
export class PageHomeModule { }
