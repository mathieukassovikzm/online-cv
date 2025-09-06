import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LstSocialsModule } from 'src/app/shared/components/lst-socials/lst-socials.module';
import { SvgDownloadModule } from 'src/app/shared/svgs/ui/svg-download/svg-download.module';
import { TopDescComponent } from './top-desc.component';
import { SvgEnModule } from 'src/app/shared/svgs/skills/language/svg-en/svg-en.module';
import { SvgEsModule } from 'src/app/shared/svgs/skills/language/svg-es/svg-es.module';
import { SvgFrModule } from 'src/app/shared/svgs/skills/language/svg-fr/svg-fr.module';

const svgs = [SvgDownloadModule, SvgFrModule, SvgEnModule, SvgEsModule];
const components = [LstSocialsModule];

@NgModule({
  imports: [CommonModule, ...svgs, ...components],
  exports: [TopDescComponent],
  declarations: [TopDescComponent],
})
export class TopDescModule {}
