import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageHomeComponent } from './page-home.component';
import { PageAboutModule } from '../page-about/page-about.module';
import { PageSkillsModule } from '../page-skills/page-skills.module';
import { PageHomeRoutingModule } from './page-home-routing.module';
import { NavigationModule } from 'src/app/shared/components/navigation/navigation.module';

@NgModule({
  imports: [
    CommonModule,
    PageAboutModule,
    PageSkillsModule,
    NavigationModule,
    PageHomeRoutingModule
  ],
  exports: [PageHomeComponent],
  declarations: [PageHomeComponent]
})
export class PageHomeModule { }
