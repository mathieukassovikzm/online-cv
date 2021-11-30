import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SvgAtomComponent } from './svg-atom.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [SvgAtomComponent],
  declarations: [SvgAtomComponent]
})
export class SvgAtomModule { }
