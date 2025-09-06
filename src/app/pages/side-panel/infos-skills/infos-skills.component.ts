import { Component, computed, OnInit, Signal } from '@angular/core';
import { TypeSkillEnum } from 'src/app/models/enum';
import { ISkillModel } from 'src/app/models/infos';
import { IUiTxtCardModel, IUiTxtSkillsModel } from 'src/app/models/uiTxt';
import { InfosService } from 'src/app/services/infos.service';
import { UiService } from 'src/app/services/ui.service';

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

  private sLanguage = this.uiService.getUiLanguage();
  public sUiText: Signal<IUiTxtSkillsModel> = computed(() => {
    return this.uiService.getUiTxt(this.sLanguage())?.sidePanelTxt.skillsTitles;
  });

  constructor(
    private infosService: InfosService,
    private uiService: UiService
  ) {}

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
