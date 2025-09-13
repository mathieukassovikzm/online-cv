import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SvgQuoteModule } from 'src/app/shared/svgs/ui/svg-quote/svg-quote.module';
import { ExtractComponent } from './extract.component';

@NgModule({
  imports: [CommonModule, SvgQuoteModule],
  exports: [ExtractComponent],
  declarations: [ExtractComponent],
})
export class ExtractModule { }
