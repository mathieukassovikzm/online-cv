import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PageAboutRoutingModule } from './page-about-routing.module';
import { PageAboutComponent } from './page-about.component';

@NgModule({
  imports: [CommonModule, PageAboutRoutingModule],
  exports: [PageAboutComponent],
  declarations: [PageAboutComponent],
})
export class PageAboutModule {}
