import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import _ from 'lodash';
import { TypeSkillEnum } from '../models/enum';
import {
  ISkillModel,
  ISocialNetwork
} from '../models/infos';
import {
  lstSocialNetwork
} from './cv-math/dataInfos';
import { skills } from './cv-math/dataSkills';

@Injectable({
  providedIn: 'root',
})
export class InfosService {
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor() { }

  getLstSocialNetwork(): ISocialNetwork[] {
    return _.filter(lstSocialNetwork, { display: true });
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
