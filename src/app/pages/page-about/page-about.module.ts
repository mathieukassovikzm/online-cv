import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PageAboutComponent } from './page-about.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [PageAboutComponent],
  declarations: [PageAboutComponent]
})
export class PageAboutModule { }
