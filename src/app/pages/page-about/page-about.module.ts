import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ArchievementsModule } from './archievements/archievements.module';
import { EducationModule } from './education/education.module';
import { ExtractModule } from './extract/extract.module';
import { HobbiesModule } from './hobbies/hobbies.module';
import { LifeTimelineModule } from './life-timeline/life-timeline.module';
import { PageAboutRoutingModule } from './page-about-routing.module';
import { PageAboutComponent } from './page-about.component';
import { TravelsModule } from './travels/travels.module';
import { WorkExperienceModule } from './work-experience/work-experience.module';

@NgModule({
  imports: [
    CommonModule,
    PageAboutRoutingModule,
    ArchievementsModule,
    ExtractModule,
    EducationModule,
    WorkExperienceModule,
    HobbiesModule,
    TravelsModule,
    LifeTimelineModule,
  ],
  exports: [PageAboutComponent],
  declarations: [PageAboutComponent],
})
export class PageAboutModule {}
