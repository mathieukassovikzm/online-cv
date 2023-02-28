import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IInfosModel } from '../models/infos';
import { ISkillModel } from '../models/skill';
import { TypeSkillEnum } from '../models/type-skill.enum';
import { infosFr } from './cv-math/infos';
import { skills } from './cv-math/skills';

@Injectable({
  providedIn: 'root'
})
export class InfosService {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor() { }

  /** GET Infos from the server */
  getInfos(): IInfosModel {
    return infosFr;
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

  getLstSkillsByType(type: TypeSkillEnum): ISkillModel[] {
    return skills;
  }
}
