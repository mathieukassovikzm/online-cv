import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LstSocialsModule } from 'src/app/shared/components/lst-socials/lst-socials.module';
import { TopDescComponent } from './top-desc.component';

@NgModule({
  imports: [CommonModule, LstSocialsModule],
  exports: [TopDescComponent],
  declarations: [TopDescComponent],
})
export class TopDescModule {}
