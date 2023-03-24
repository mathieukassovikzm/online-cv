import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SvgEmailModule } from '../../svgs/ui/svg-email/svg-email.module';
import { SvgInfoModule } from '../../svgs/ui/svg-info/svg-info.module';
import { SvgPhoneModule } from '../../svgs/ui/svg-phone/svg-phone.module';
import { SvgWorkModule } from '../../svgs/ui/svg-work/svg-work.module';
import { BurgerModule } from '../burger/burger.module';
import { NavigationComponent } from './navigation.component';

var svgs = [SvgEmailModule, SvgInfoModule, SvgPhoneModule, SvgWorkModule];
@NgModule({
  imports: [CommonModule, svgs, BurgerModule, RouterModule],
  exports: [NavigationComponent],
  declarations: [NavigationComponent],
})
export class NavigationModule {}
