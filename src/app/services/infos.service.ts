import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import _ from 'lodash';
import { CodeLanguageEnum, TypeSkillEnum } from '../models/enum';
import {
  IInfosModel,
  ILanguageModel,
  ISkillModel,
  ISocialNetwork,
} from '../models/infos';
import {
  infosEn,
  infosEs,
  infosFr,
  lstSocialNetwork,
} from './cv-math/dataInfos';
import { languagesEn, languagesEs, languagesFr } from './cv-math/dataLanguages';
import { skills } from './cv-math/dataSkills';
import { UiService } from './ui.service';

@Injectable({
  providedIn: 'root',
})
export class InfosService {
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(public uiService: UiService) {}

  getInfos(): IInfosModel {
    switch (this.uiService.getUiLanguage()) {
      case CodeLanguageEnum.FR:
        return infosFr;
      case CodeLanguageEnum.EN:
        return infosEn;
      case CodeLanguageEnum.ES:
        return infosEs;
      default:
        return infosFr;
    }
  }

  getLstSocialNetwork(): ISocialNetwork[] {
    return _.filter(lstSocialNetwork, { display: true });
  }

  getLanguages(): ILanguageModel[] {
    switch (this.uiService.getUiLanguage()) {
      case CodeLanguageEnum.FR:
        return languagesFr;
      case CodeLanguageEnum.EN:
        return languagesEn;
      case CodeLanguageEnum.ES:
        return languagesEs;
      default:
        return languagesFr;
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
