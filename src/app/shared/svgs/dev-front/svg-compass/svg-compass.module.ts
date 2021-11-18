import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SvgCompassComponent } from './svg-compass.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [SvgCompassComponent],
  declarations: [SvgCompassComponent]
})
export class SvgCompassModule { }
