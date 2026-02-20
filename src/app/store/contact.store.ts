import { computed, inject } from '@angular/core';
import { signalStore, withComputed, withMethods, withState } from '@ngrx/signals';
import { CodeLanguageEnum } from '../models/enum';
import { contactEn, contactEs, contactFr } from '../services/cv-math/dataContact';
import { LanguageStore } from './language.store';

type ContactState = {
};

const initialState: ContactState = {
};

export const ContactStore = signalStore(
  { providedIn: 'root' },
  withState<ContactState>(initialState),
  withComputed((store, languageStore = inject(LanguageStore)) => ({
    getContactTxt: computed(() => {
      const language = languageStore.uiLanguage();
      switch (language) {
        case CodeLanguageEnum.FR:
          return contactFr;
        case CodeLanguageEnum.EN:
          return contactEn;
        case CodeLanguageEnum.ES:
          return contactEs;
        default:
          return contactFr;
      }
    }),
  })),
  withMethods((store, languageStore = inject(LanguageStore)) => ({
  }))
);