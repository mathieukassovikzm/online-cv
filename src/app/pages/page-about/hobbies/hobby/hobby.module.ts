import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SvgEducationModule } from 'src/app/shared/svgs/ui/svg-education/svg-education.module';
import { SvgMedalModule } from 'src/app/shared/svgs/ui/svg-medal/svg-medal.module';
import { SvgWorkModule } from 'src/app/shared/svgs/ui/svg-work/svg-work.module';
import { HobbyComponent } from './hobby.component';

const svgs = [SvgMedalModule, SvgWorkModule, SvgEducationModule];

@NgModule({
  imports: [CommonModule, ...svgs],
  exports: [HobbyComponent],
  declarations: [HobbyComponent],
})
export class HobbyModule { }
