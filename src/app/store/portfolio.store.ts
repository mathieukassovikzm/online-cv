import { computed, inject } from '@angular/core';
import { signalStore, withComputed, withMethods, withState } from '@ngrx/signals';
import { CodeLanguageEnum } from '../models/enum';
import { projectsEn, projectsEs, projectsFr } from '../services/cv-math/dataPorfolio';
import { LanguageStore } from './language.store';

type PortfolioState = {
};

const initialState: PortfolioState = {
};

export const PortfolioStore = signalStore(
  { providedIn: 'root' },
  withState<PortfolioState>(initialState),
  withComputed((store, languageStore = inject(LanguageStore)) => ({
    getPortfolio: computed(() => {
      const language = languageStore.uiLanguage();
      switch (language) {
        case CodeLanguageEnum.FR:
          return projectsFr;
        case CodeLanguageEnum.EN:
          return projectsEn;
        case CodeLanguageEnum.ES:
          return projectsEs;
        default:
          return projectsFr;
      }
    }),
  })),
  withMethods((store, languageStore = inject(LanguageStore)) => ({

  }))
);