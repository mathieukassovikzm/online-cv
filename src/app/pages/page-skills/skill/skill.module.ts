import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkillComponent } from './skill.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [SkillComponent],
  declarations: [SkillComponent]
})
export class SkillModule { }
