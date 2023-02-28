import { Component, OnInit } from '@angular/core';
import { ISkillModel } from 'src/app/models/skill';
import { TypeSkillEnum } from 'src/app/models/type-skill.enum';
import { InfosService } from 'src/app/services/infos.service';

@Component({
  selector: 'app-page-skills',
  templateUrl: './page-skills.component.html',
  styleUrls: ['./page-skills.component.scss']
})
export class PageSkillsComponent implements OnInit {

  public skillsFrontEnd = <ISkillModel[]>[];
  public skillsBackEnd = <ISkillModel[]>[];
  public skillsBdd = <ISkillModel[]>[];
  public skillsVersionning = <ISkillModel[]>[];
  public skillsTools = <ISkillModel[]>[];
  public skillsAdobe = <ISkillModel[]>[];

  constructor(private infosService: InfosService) {
    this.skillsFrontEnd = infosService.getLstSkillsByType(TypeSkillEnum.FrontEnd);
    this.skillsBackEnd = infosService.getLstSkillsByType(TypeSkillEnum.FrontEnd);
    this.skillsBdd = infosService.getLstSkillsByType(TypeSkillEnum.FrontEnd);
    this.skillsVersionning = infosService.getLstSkillsByType(TypeSkillEnum.FrontEnd);
    this.skillsTools = infosService.getLstSkillsByType(TypeSkillEnum.FrontEnd);
    this.skillsAdobe = infosService.getLstSkillsByType(TypeSkillEnum.FrontEnd);
  }

  ngOnInit(): void {

  }
}
