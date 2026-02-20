import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { TypeSkillEnum } from 'src/app/models/enum';
import { ISkillModel } from 'src/app/models/infos';
import { AboutStore } from 'src/app/store/about.store';
import { LanguageStore } from 'src/app/store/language.store';
import { UiStore } from 'src/app/store/ui.store';
import { SkillComponent } from './skill/skill.component';

const modules = [CommonModule];
const components = [SkillComponent];

@Component({
  selector: 'app-infos-skills',
  templateUrl: './infos-skills.component.html',
  styleUrls: ['./infos-skills.component.scss'],
  imports: [...modules, ...components],
  standalone: true
})
export class InfosSkillsComponent implements OnInit {
  private aboutStore = inject(AboutStore);

  readonly languageStore = inject(LanguageStore);
  readonly uiStore = inject(UiStore);

  public uiText = this.uiStore.getUiTxt().sidePanelTxt.skillsTitles;

  public skillsFrontEnd = <ISkillModel[]>[];
  public skillsBackEnd = <ISkillModel[]>[];
  public skillsBdd = <ISkillModel[]>[];
  public skillsVersionning = <ISkillModel[]>[];
  public skillsTools = <ISkillModel[]>[];
  public skillsAdobe = <ISkillModel[]>[];

  constructor() { }

  ngOnInit(): void {
    this.skillsFrontEnd = this.aboutStore.getLstSkillsByType(
      TypeSkillEnum.FrontEnd
    );
    this.skillsBackEnd = this.aboutStore.getLstSkillsByType(
      TypeSkillEnum.BackEnd
    );
    this.skillsBdd = this.aboutStore.getLstSkillsByType(TypeSkillEnum.Bdd);
    this.skillsVersionning = this.aboutStore.getLstSkillsByType(
      TypeSkillEnum.Versionning
    );
    this.skillsTools = this.aboutStore.getLstSkillsByType(
      TypeSkillEnum.Tools
    );
    this.skillsAdobe = this.aboutStore.getLstSkillsByType(
      TypeSkillEnum.Adobe
    );
  }
}
