import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LifeTimelineComponent } from './life-timeline.component';
import { CardModule } from 'src/app/shared/components/card/card.module';
import { LifeExperienceModule } from 'src/app/shared/components/life-experience/life-experience.module';

@NgModule({
  imports: [CommonModule, CardModule, LifeExperienceModule],
  exports: [LifeTimelineComponent],
  declarations: [LifeTimelineComponent],
})
export class LifeTimelineModule {}
