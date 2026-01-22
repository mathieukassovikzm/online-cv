import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PageProjectsRoutingModule } from './page-projects-routing.module';
import { PageProjectsComponent } from './page-projects.component';

@NgModule({
  imports: [CommonModule, PageProjectsRoutingModule],
  exports: [PageProjectsComponent],
  declarations: [PageProjectsComponent],
})
export class PageProjectsModule {}
