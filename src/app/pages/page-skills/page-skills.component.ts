import { Component, OnInit } from '@angular/core';
import { TypeSkillEnum } from 'src/app/models/type-skill.enum';
import { SkillService } from 'src/app/services/skill.service';

@Component({
  selector: 'app-page-skills',
  templateUrl: './page-skills.component.html',
  styleUrls: ['./page-skills.component.scss']
})
export class PageSkillsComponent implements OnInit {

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
