import { Component, OnInit } from '@angular/core';
import { TypeSkillEnum } from 'src/app/models/enum';
import { ISkillModel } from 'src/app/models/infos';
import { InfosService } from 'src/app/services/infos.service';

@Component({
  selector: 'app-infos-skills',
  templateUrl: './infos-skills.component.html',
  styleUrls: ['./infos-skills.component.scss'],
})
export class InfosSkillsComponent implements OnInit {
  public skillsFrontEnd = <ISkillModel[]>[];
  public skillsBackEnd = <ISkillModel[]>[];
  public skillsBdd = <ISkillModel[]>[];
  public skillsVersionning = <ISkillModel[]>[];
  public skillsTools = <ISkillModel[]>[];
  public skillsAdobe = <ISkillModel[]>[];

  constructor(private infosService: InfosService) {}

  ngOnInit(): void {
    this.skillsFrontEnd = this.infosService.getLstSkillsByType(
      TypeSkillEnum.FrontEnd
    );
    this.skillsBackEnd = this.infosService.getLstSkillsByType(
      TypeSkillEnum.BackEnd
    );
    this.skillsBdd = this.infosService.getLstSkillsByType(TypeSkillEnum.Bdd);
    this.skillsVersionning = this.infosService.getLstSkillsByType(
      TypeSkillEnum.Versionning
    );
    this.skillsTools = this.infosService.getLstSkillsByType(
      TypeSkillEnum.Tools
    );
    this.skillsAdobe = this.infosService.getLstSkillsByType(
      TypeSkillEnum.Adobe
    );
  }
}
