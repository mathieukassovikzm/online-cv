import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageHomeComponent } from './page-home.component';

@NgModule({
  imports: [
    CommonModule,
    PageAboutModule,
    NavigationModule
  ],
  exports: [PageHomeComponent],
  declarations: [PageHomeComponent]
})
export class PageHomeModule { }
