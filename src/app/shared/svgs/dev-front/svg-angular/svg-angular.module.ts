import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SvgAngularComponent } from './svg-angular.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [SvgAngularComponent],
  declarations: [SvgAngularComponent]
})
export class SvgAngularModule { }
