import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SvgBlazorComponent } from './svg-blazor.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [SvgBlazorComponent],
  declarations: [SvgBlazorComponent]
})
export class SvgBlazorModule { }
