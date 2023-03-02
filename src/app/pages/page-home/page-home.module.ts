import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PageHomeRoutingModule } from './page-home-routing.module';
import { PageHomeComponent } from './page-home.component';

@NgModule({
  imports: [CommonModule, PageHomeRoutingModule],
  exports: [PageHomeComponent],
  declarations: [PageHomeComponent],
})
export class PageHomeModule {}
