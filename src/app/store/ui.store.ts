import { computed, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { patchState, signalStore, withComputed, withMethods, withState } from '@ngrx/signals';
import { CodeLanguageEnum, PagesEnum } from '../models/enum';
import { infosEn, infosEs, infosFr } from '../services/cv-math/dataInfos';
import { languagesEn, languagesEs, languagesFr } from '../services/cv-math/dataLanguages';
import { uiTxtEn, uiTxtEs, uiTxtFr } from '../services/ui-txt/ui-txt';
import { LanguageStore } from './language.store';

type UiState = {
  isNavOpen: boolean;
  darkMode: boolean;
};

const initialState: UiState = {
  isNavOpen: false,
  darkMode: false
};

export const UiStore = signalStore(
  { providedIn: 'root' },
  withState<UiState>(initialState),
  withComputed((store, languageStore = inject(LanguageStore)) => ({
    getLanguages: computed(() => {
      const language = languageStore.uiLanguage();
      switch (language) {
        case CodeLanguageEnum.FR:
          return languagesFr;
        case CodeLanguageEnum.EN:
          return languagesEn;
        case CodeLanguageEnum.ES:
          return languagesEs;
        default:
          return languagesFr;
      }
    }),

    getUiTxt: computed(() => {
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

    getInfosTxt: computed(() => {
      const language = languageStore.uiLanguage();
      switch (language) {
        case CodeLanguageEnum.FR:
          return infosFr;
        case CodeLanguageEnum.EN:
          return infosEn;
        case CodeLanguageEnum.ES:
          return infosEs;
        default:
          return infosFr;
      }
    }),
  })),
  withMethods((
    store,
    router = inject(Router),
    route = inject(ActivatedRoute)
  ) => ({

    //#region Navigation

    toggleNav(): void {
      patchState(store, { isNavOpen: !store.isNavOpen() });
    },
    closeNav(): void {
      patchState(store, { isNavOpen: false });
    },

    //#endregion

    //#region Dark Mode

    setDarkMode(isDarkMode: boolean): void {
      patchState(store, { darkMode: isDarkMode });
    },

    toggleDarkMode(): void {
      patchState(store, { darkMode: !store.darkMode() });
    },

    //#endregion

    getUiPageName(page: PagesEnum): string {
      const navTxt = store.getUiTxt().navTxt;

      switch (page) {
        case PagesEnum.HOME:
          return navTxt.homeTitle;
        case PagesEnum.ABOUT:
          return navTxt.aboutTitle;
        case PagesEnum.PROJECTS:
          return navTxt.projectsTitle;
        case PagesEnum.CONTACTS:
          return navTxt.contactTitle;
        default:
          return '';
      }
    },
  }))
);