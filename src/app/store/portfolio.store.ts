import { computed, inject } from '@angular/core';
import { signalStore, withComputed, withMethods, withState } from '@ngrx/signals';
import { CodeLanguageEnum } from '../models/enum';
import { projectsEn, projectsEs, projectsFr } from '../services/cv-math/dataPortfolio';
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
      let lstProjects = [];

      switch (language) {
        case CodeLanguageEnum.FR:
          lstProjects = projectsFr;
          break;
        case CodeLanguageEnum.EN:
          lstProjects = projectsEn;
          break;
        case CodeLanguageEnum.ES:
          lstProjects = projectsEs;
          break;
        default:
          lstProjects = projectsFr;
          break;
      }

      let index = 1;
      lstProjects = lstProjects.map(project => {
        return {
          ...project,
          id: index++,
        };
      });
      return lstProjects;
    }),
  })),
  withMethods((store, languageStore = inject(LanguageStore)) => ({

  }))
);