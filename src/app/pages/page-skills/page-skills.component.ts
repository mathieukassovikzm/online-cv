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
  }

  ngOnInit(): void {
    this.skillsFrontEnd = this.infosService.getLstSkillsByType(TypeSkillEnum.FrontEnd);
    this.skillsBackEnd = this.infosService.getLstSkillsByType(TypeSkillEnum.BackEnd);
    this.skillsBdd = this.infosService.getLstSkillsByType(TypeSkillEnum.Bdd);
    this.skillsVersionning = this.infosService.getLstSkillsByType(TypeSkillEnum.Versionning);
    this.skillsTools = this.infosService.getLstSkillsByType(TypeSkillEnum.Tools);
    this.skillsAdobe = this.infosService.getLstSkillsByType(TypeSkillEnum.Adobe);
  }
}
