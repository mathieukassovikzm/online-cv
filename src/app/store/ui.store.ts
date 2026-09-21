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

const DARK_MODE_KEY = 'cv-dark-mode';

function readDarkModePreference(): boolean {
  try {
    const stored = localStorage.getItem(DARK_MODE_KEY);
    if (stored !== null) {
      return stored === 'true';
    }
    return window.matchMedia?.('(prefers-color-scheme: dark)').matches ?? false;
  } catch {
    return false;
  }
}

function persistDarkModePreference(isDarkMode: boolean): void {
  try {
    localStorage.setItem(DARK_MODE_KEY, String(isDarkMode));
  } catch {
    /* storage unavailable — preference stays in-memory only */
  }
}

const initialState: UiState = {
  isNavOpen: false,
  darkMode: readDarkModePreference()
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
      persistDarkModePreference(isDarkMode);
    },

    toggleDarkMode(): void {
      const next = !store.darkMode();
      patchState(store, { darkMode: next });
      persistDarkModePreference(next);
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