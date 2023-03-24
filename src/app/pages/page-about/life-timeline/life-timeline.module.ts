import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LifeTimelineComponent } from './life-timeline.component';
import { CardModule } from 'src/app/shared/components/card/card.module';

@NgModule({
  imports: [CommonModule, CardModule],
  exports: [LifeTimelineComponent],
  declarations: [LifeTimelineComponent],
})
export class LifeTimelineModule {}
