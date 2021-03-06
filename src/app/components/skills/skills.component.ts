import { Component, OnInit } from '@angular/core';
import { SkillService } from '@services/skill.service';
import { Skill } from '@shared/skill';
import { TypeSkill } from '@shared/type-skill';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  typesSkills: TypeSkill[] = [];

  constructor(private skillService: SkillService) { }

  ngOnInit(): void {
    this.getTypesSkills();
  }

  getTypesSkills(): void {
    this.skillService.getTypesSkills()
      .subscribe(typesSkills => this.typesSkills = typesSkills);
  }
}
