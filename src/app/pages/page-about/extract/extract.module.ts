import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExtractComponent } from './extract.component';
import { SvgQuoteModule } from 'src/app/shared/svgs/ui/svg-quote/svg-quote.module';

@NgModule({
  imports: [CommonModule, SvgQuoteModule],
  exports: [ExtractComponent],
  declarations: [ExtractComponent],
})
export class ExtractModule {}
