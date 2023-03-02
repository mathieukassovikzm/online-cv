import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfosSkillsComponent } from './infos-skills.component';
import { SkillModule } from './skill/skill.module';

@NgModule({
  imports: [CommonModule, SkillModule],
  exports: [InfosSkillsComponent],
  declarations: [InfosSkillsComponent],
})
export class InfosSkillsModule {}
