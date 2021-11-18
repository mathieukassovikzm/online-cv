import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageSkillsComponent } from './page-skills.component';
import { SkillModule } from './skill/skill.module';

@NgModule({
  imports: [
    CommonModule,
    SkillModule
  ],
  exports: [PageSkillsComponent],
  declarations: [PageSkillsComponent]
})
export class PageSkillsModule { }
