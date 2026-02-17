import { inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { patchState, signalStore, withMethods, withState } from '@ngrx/signals';
import { CodeLanguageEnum } from '../models/enum';

type LanguageState = {
  uiLanguage: CodeLanguageEnum;
};

const initialState: LanguageState = {
  uiLanguage: CodeLanguageEnum.FR,
};

export const LanguageStore = signalStore(
  { providedIn: 'root' },
  withState<LanguageState>(initialState),
  withMethods((
    store,
    router = inject(Router),
    route = inject(ActivatedRoute)
  ) => ({
    setUiLanguage(lang: CodeLanguageEnum): void {
      if (lang === undefined || lang === null) {
        lang = this.getUsersLocale(CodeLanguageEnum.FR);
      }
      patchState(store, { uiLanguage: lang });
    },

    setUiLanguageAndNavigate(lang: CodeLanguageEnum): void {
      this.setUiLanguage(lang);
      // With query parameters
      router.navigate([], {
        queryParams: { lang },
        relativeTo: route,
        queryParamsHandling: 'merge',
      });
    },

    getUsersLocale(defaultValue: CodeLanguageEnum): CodeLanguageEnum {
      if (typeof window === 'undefined' || typeof window.navigator === 'undefined') {
        return defaultValue;
      }
      const wn = window.navigator as any;
      let lang = wn.languages ? wn.languages[0] : defaultValue;
      lang = lang || wn.language || wn.browserLanguage || wn.userLanguage;
      switch (lang) {
        case 'fr':
        case 'fr-FR':
        case 'fr-CA':
          return CodeLanguageEnum.FR;
        case 'en':
        case 'en-US':
        case 'en-GB':
          return CodeLanguageEnum.EN;
        case 'es':
        case 'es-ES':
        case 'es-MX':
          return CodeLanguageEnum.ES;
        default:
          return defaultValue;
      }
    },
  }))
);