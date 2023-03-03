import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArchievementsComponent } from './archievements.component';
import { CardModule } from 'src/app/shared/components/card/card.module';

@NgModule({
  imports: [CommonModule, CardModule],
  exports: [ArchievementsComponent],
  declarations: [ArchievementsComponent],
})
export class ArchievementsModule {}
