import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BannerModule } from './banner/banner.module';
import { InfosRecapModule } from './infos-recap/infos-recap.module';
import { PageHomeRoutingModule } from './page-home-routing.module';
import { PageHomeComponent } from './page-home.component';

@NgModule({
  imports: [
    CommonModule,
    PageHomeRoutingModule,
    BannerModule,
    InfosRecapModule,
  ],
  exports: [PageHomeComponent],
  declarations: [PageHomeComponent],
})
export class PageHomeModule {}
