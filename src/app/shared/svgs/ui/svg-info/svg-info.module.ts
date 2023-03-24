import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SvgInfoComponent } from './svg-info.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [SvgInfoComponent],
  declarations: [SvgInfoComponent]
})
export class SvgInfoModule { }
