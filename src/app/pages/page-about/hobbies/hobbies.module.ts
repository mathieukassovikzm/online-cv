import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HobbiesComponent } from './hobbies.component';
import { HobbyModule } from './hobby/hobby.module';

const components = [
  HobbyModule
]
@NgModule({
  imports: [CommonModule, ...components],
  exports: [HobbiesComponent],
  declarations: [HobbiesComponent],
})
export class HobbiesModule {}
