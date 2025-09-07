import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BannerModule } from './banner/banner.module';
import { InfosRecapModule } from './infos-recap/infos-recap.module';
import { LstEntreprisesModule } from './lst-enterprises/lst-enterprises.module';
import { PageHomeRoutingModule } from './page-home-routing.module';
import { PageHomeComponent } from './page-home.component';

const components = [BannerModule, InfosRecapModule, LstEntreprisesModule];

@NgModule({
  imports: [CommonModule, PageHomeRoutingModule, ...components],
  exports: [PageHomeComponent],
  declarations: [PageHomeComponent],
})
export class PageHomeModule {}
