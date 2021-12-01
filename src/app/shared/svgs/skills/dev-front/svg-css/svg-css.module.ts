import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SvgCssComponent } from './svg-css.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [SvgCssComponent],
  declarations: [SvgCssComponent]
})
export class SvgCssModule { }
