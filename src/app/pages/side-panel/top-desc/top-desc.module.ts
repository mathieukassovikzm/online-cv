import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LstSocialsModule } from 'src/app/shared/components/lst-socials/lst-socials.module';
import { SvgDownloadModule } from 'src/app/shared/svgs/ui/svg-download/svg-download.module';
import { TopDescComponent } from './top-desc.component';

@NgModule({
  imports: [CommonModule, LstSocialsModule, SvgDownloadModule],
  exports: [TopDescComponent],
  declarations: [TopDescComponent],
})
export class TopDescModule {}
