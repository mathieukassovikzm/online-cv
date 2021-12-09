import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageHomeComponent } from './page-home.component';
import { PageAboutModule } from '../page-about/page-about.module';
import { PageSkillsModule } from '../page-skills/page-skills.module';
import { PageHomeRoutingModule } from './page-home-routing.module';
import { NavigationModule } from 'src/app/shared/components/navigation/navigation.module';
import { PageExtractModule } from '../page-extract/page-extract.module';
import { PageArchievementsModule } from '../page-archievements/page-archievements.module';
import { PageEducationModule } from '../page-education/page-education.module';

@NgModule({
  imports: [
    CommonModule,
    NavigationModule,
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
