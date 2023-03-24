import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkExperienceComponent } from './work-experience.component';
import { CardModule } from 'src/app/shared/components/card/card.module';

@NgModule({
  imports: [CommonModule, CardModule],
  exports: [WorkExperienceComponent],
  declarations: [WorkExperienceComponent],
})
export class WorkExperienceModule {}
