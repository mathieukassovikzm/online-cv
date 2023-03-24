import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EducationComponent } from './education.component';
import { CardModule } from 'src/app/shared/components/card/card.module';

@NgModule({
  imports: [CommonModule, CardModule],
  exports: [EducationComponent],
  declarations: [EducationComponent],
})
export class EducationModule {}
