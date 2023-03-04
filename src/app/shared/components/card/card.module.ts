import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SvgEducationModule } from '../../svgs/ui/svg-education/svg-education.module';
import { SvgMedalModule } from '../../svgs/ui/svg-medal/svg-medal.module';
import { SvgWorkModule } from '../../svgs/ui/svg-work/svg-work.module';
import { CardComponent } from './card.component';

@NgModule({
  imports: [CommonModule, SvgMedalModule, SvgWorkModule, SvgEducationModule],
  exports: [CardComponent],
  declarations: [CardComponent],
})
export class CardModule {}
