import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PageAboutModule } from '../page-about/page-about.module';
import { PageArchievementsModule } from '../page-archievements/page-archievements.module';
import { PageEducationModule } from '../page-education/page-education.module';
import { PageExtractModule } from '../page-extract/page-extract.module';
import { PageSkillsModule } from '../page-skills/page-skills.module';
import { PageHomeRoutingModule } from './page-home-routing.module';
import { PageHomeComponent } from './page-home.component';

@NgModule({
  imports: [
    CommonModule,
    PageHomeRoutingModule,
    PageAboutModule,
    PageEducationModule,
    PageSkillsModule,
    PageExtractModule,
    PageArchievementsModule
  ],
  exports: [PageHomeComponent],
  declarations: [PageHomeComponent]
})
export class PageHomeModule { }
