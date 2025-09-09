import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BannerModule } from './banner/banner.module';
import { InfosRecapModule } from './infos-recap/infos-recap.module';
import { LstEntreprisesModule } from './lst-enterprises/lst-enterprises.module';
import { PageHomeRoutingModule } from './page-home-routing.module';
import { PageHomeComponent } from './page-home.component';
import { RecommendationsModule } from './recommendations/recommendations.module';

const components = [
  BannerModule,
  InfosRecapModule,
  LstEntreprisesModule,
  RecommendationsModule,
];

@NgModule({
  imports: [CommonModule, PageHomeRoutingModule, ...components],
  exports: [PageHomeComponent],
  declarations: [PageHomeComponent],
})
export class PageHomeModule {}
