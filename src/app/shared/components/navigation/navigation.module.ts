import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './navigation.component';
import { SvgEmailModule } from '../../svgs/ui/svg-email/svg-email.module';
import { SvgInfoModule } from '../../svgs/ui/svg-info/svg-info.module';
import { SvgWorkModule } from '../../svgs/ui/svg-work/svg-work.module';
import { SvgPhoneModule } from '../../svgs/ui/svg-phone/svg-phone.module';
import { BurgerModule } from '../burger/burger.module';

var svgs = [SvgEmailModule, SvgInfoModule, SvgPhoneModule, SvgWorkModule];
@NgModule({
  imports: [CommonModule, svgs, BurgerModule],
  exports: [NavigationComponent],
  declarations: [NavigationComponent],
})
export class NavigationModule {}
