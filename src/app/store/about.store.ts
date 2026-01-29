import { computed, inject } from '@angular/core';
import { signalStore, withComputed, withMethods, withState } from '@ngrx/signals';
import _ from 'lodash';
import { IExperienceModel } from '../models/about';
import { CodeLanguageEnum } from '../models/enum';
import { aboutEn, aboutEs, aboutFr } from '../services/cv-math/dataAbout';
import { LanguageStore } from './language.store';

type AboutState = {
};

const initialState: AboutState = {
};

export const AboutStore = signalStore(
  { providedIn: 'root' },
  withState<AboutState>(initialState),
  withComputed((store, languageStore = inject(LanguageStore)) => ({
    getAboutTxt: computed(() => {
      const language = languageStore.uiLanguage();
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
    }),
  })),
  withMethods((store, languageStore = inject(LanguageStore)) => ({
    getLifeTimeline(): IExperienceModel[] {
      const about = store.getAboutTxt();
      let timeline: IExperienceModel[] = _.union(
        about?.educations,
        about?.archievements,
        about?.experiencesPro
      );
      timeline = _.orderBy(timeline, (i) => i.dateEnd, ['desc']);
      return timeline;
    },
  }))
);