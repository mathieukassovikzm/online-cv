import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SvgEducationModule } from '../../svgs/ui/svg-education/svg-education.module';
import { SvgMedalModule } from '../../svgs/ui/svg-medal/svg-medal.module';
import { SvgWorkModule } from '../../svgs/ui/svg-work/svg-work.module';
import { LifeExperienceComponent } from './life-experience.component';

const svgs = [SvgMedalModule, SvgWorkModule, SvgEducationModule];
@NgModule({
  imports: [CommonModule, ...svgs],
  exports: [LifeExperienceComponent],
  declarations: [LifeExperienceComponent],
})
export class LifeExperienceModule { }
