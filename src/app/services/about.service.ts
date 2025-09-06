import { Injectable } from '@angular/core';
import _ from 'lodash';
import { IAboutModel } from '../models/about';
import { CodeLanguageEnum } from '../models/enum';
import { IExperienceModel } from '../models/experience';
import { aboutEn, aboutEs, aboutFr } from './cv-math/dataAbout';

@Injectable({
  providedIn: 'root',
})
export class AboutService {
  constructor() {}

  getAbout(language: CodeLanguageEnum): IAboutModel {
    switch (language) {
      case CodeLanguageEnum.FR:
        return aboutFr;
      case CodeLanguageEnum.EN:
        return aboutEn;
      case CodeLanguageEnum.ES:
        return aboutEs;
      default:
        return aboutFr;
    }
  }

  getLifeTimeline(language: CodeLanguageEnum): IExperienceModel[] {
    const about = this.getAbout(language);
    let timeline: IExperienceModel[] = _.union(
      about?.educations,
      about?.archievements,
      about?.experiencesPro
    );
    timeline = _.orderBy(timeline, (i) => i.dateEnd, ['desc']);
    return timeline;
  }
}
