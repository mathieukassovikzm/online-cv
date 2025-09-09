import { computed, Injectable, Signal } from '@angular/core';
import _ from 'lodash';
import { IAboutModel } from '../models/about';
import { CodeLanguageEnum } from '../models/enum';
import { IExperienceModel } from '../models/experience';
import { aboutEn, aboutEs, aboutFr } from './cv-math/dataAbout';
import { UiService } from './ui.service';

@Injectable({
  providedIn: 'root',
})
export class AboutService {
  constructor(private uiService: UiService) {}

  getAbout(): Signal<IAboutModel> {
    return computed(() => {
      const language = this.uiService.getUiLanguage();
      switch (language()) {
        case CodeLanguageEnum.FR:
          return aboutFr;
        case CodeLanguageEnum.EN:
          return aboutEn;
        case CodeLanguageEnum.ES:
          return aboutEs;
        default:
          return aboutFr;
      }
    });
  }

  getLifeTimeline(): Signal<IExperienceModel[]> {
    return computed(() => {
      const about = this.getAbout();
      let timeline: IExperienceModel[] = _.union(
        about()?.educations,
        about()?.archievements,
        about()?.experiencesPro
      );
      timeline = _.orderBy(timeline, (i) => i.dateEnd, ['desc']);
      return timeline;
    });
  }
}
