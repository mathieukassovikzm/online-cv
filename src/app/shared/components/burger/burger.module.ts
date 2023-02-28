import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BurgerComponent } from './burger.component';

@NgModule({
  imports: [CommonModule],
  exports: [BurgerComponent],
  declarations: [BurgerComponent],
})
export class BurgerModule {}
