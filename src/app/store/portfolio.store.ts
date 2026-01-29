import { signalStore, withComputed, withMethods, withState } from '@ngrx/signals';
import { LanguageStore } from './language.store';
import { computed, inject } from '@angular/core';
import { CodeLanguageEnum } from '../models/enum';
import { uiTxtFr, uiTxtEn, uiTxtEs } from '../services/ui-txt/ui-txt';

type PortfolioState = {
};

const initialState: PortfolioState = {
};

export const PortfolioStore = signalStore(
  { providedIn: 'root' },
  withState<PortfolioState>(initialState),
  withComputed((store, languageStore = inject(LanguageStore)) => ({
    getPortfolioTxt: computed(() => {
      const language = languageStore.uiLanguage();
      switch (language) {
        case CodeLanguageEnum.FR:
          return uiTxtFr;
        case CodeLanguageEnum.EN:
          return uiTxtEn;
        case CodeLanguageEnum.ES:
          return uiTxtEs;
        default:
          return uiTxtFr;
      }
    }),
  })),
  withMethods((store, languageStore = inject(LanguageStore)) => ({

  }))
);