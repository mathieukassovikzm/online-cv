import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IInfosModel } from '../models/infos';
import { LanguagesEnum } from '../models/laguages.enum';
import { ILanguageModel } from '../models/language';
import { ISkillModel } from '../models/skill';
import { TypeSkillEnum } from '../models/type-skill.enum';
import { infosEn, infosEs, infosFr } from './cv-math/dataInfos';
import { languagesFr, languagesEn, languagesEs } from './cv-math/dataLanguages';
import { skills } from './cv-math/dataSkills';
import { UiService } from './ui.service';
import _ from "lodash";

@Injectable({
  providedIn: 'root'
})
export class InfosService {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(public uiService: UiService) { }

  getInfos(): IInfosModel {
    switch (this.uiService.getUiLanguage()) {
      case LanguagesEnum.French:
        return infosFr;
      case LanguagesEnum.English:
        return infosEn;
      case LanguagesEnum.Spanish:
        return infosEs;
      default: return infosFr;
    }
  }

  getLanguages(): ILanguageModel[] {
    switch (this.uiService.getUiLanguage()) {
      case LanguagesEnum.French:
        return languagesFr;
      case LanguagesEnum.English:
        return languagesEn;
      case LanguagesEnum.Spanish:
        return languagesEs;
      default: return languagesFr;
    }
  }

  getTypesSkills(): Array<Object> {
    return Object.keys(TypeSkillEnum).filter((item) => {
      return isNaN(Number(item));
    });
  }

  /** GET SKILLS */
  getLstSkills(): ISkillModel[] {
    return skills;
  }

  getLstSkillsByType(typeSkill: TypeSkillEnum): ISkillModel[] {
    return _.filter(skills, { type: typeSkill, display: true });
  }
}
