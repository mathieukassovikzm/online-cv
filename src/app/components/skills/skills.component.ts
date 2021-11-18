import { Component, OnInit } from '@angular/core';
import { TypeSkillEnum } from '@app/models/type-skill-enum';
import { SkillService } from '@app/services/skill.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  typesSkills: TypeSkillEnum[] = [];

  constructor(private skillService: SkillService) { }

  ngOnInit(): void {
    this.getTypesSkills();
  }

  getTypesSkills(): void {
    // this.skillService.getTypesSkills()
    //   .subscribe(typesSkills => this.typesSkills = typesSkills);
  }
}
