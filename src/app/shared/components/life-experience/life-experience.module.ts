import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LifeExperienceComponent } from './life-experience.component';
import { SvgEducationModule } from '../../svgs/ui/svg-education/svg-education.module';
import { SvgMedalModule } from '../../svgs/ui/svg-medal/svg-medal.module';
import { SvgWorkModule } from '../../svgs/ui/svg-work/svg-work.module';

@NgModule({
  imports: [CommonModule, SvgMedalModule, SvgWorkModule, SvgEducationModule],
  exports: [LifeExperienceComponent],
  declarations: [LifeExperienceComponent],
})
export class LifeExperienceModule {}
