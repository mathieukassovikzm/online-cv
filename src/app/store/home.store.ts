import { computed, inject } from '@angular/core';
import { signalStore, withComputed, withMethods, withState } from '@ngrx/signals';
import { CodeLanguageEnum } from '../models/enum';
import { homeEn, homeEs, homeFr } from '../services/cv-math/dataHome';
import { LanguageStore } from './language.store';

type HomeState = {
};

const initialState: HomeState = {
};

export const HomeStore = signalStore(
  { providedIn: 'root' },
  withState<HomeState>(initialState),
  withComputed((store, languageStore = inject(LanguageStore)) => ({
    getHomeTxt: computed(() => {
      const language = languageStore.uiLanguage();
      switch (language) {
        case CodeLanguageEnum.FR:
          return homeFr;
        case CodeLanguageEnum.EN:
          return homeEn;
        case CodeLanguageEnum.ES:
          return homeEs;
        default:
          return homeFr;
      }
    }),
  })),
  withMethods((store, languageStore = inject(LanguageStore)) => ({

  }))
);