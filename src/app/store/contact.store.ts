import { computed, inject } from '@angular/core';
import { patchState, signalStore, withComputed, withMethods, withState } from '@ngrx/signals';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { catchError, exhaustMap, finalize, pipe, tap } from 'rxjs';
import { IEmailModel, IErrorModel } from '../models/contact';
import { CodeLanguageEnum } from '../models/enum';
import { contactEn, contactEs, contactFr } from '../services/cv-math/dataContact';
import { EmailService } from '../services/email.service';
import { LanguageStore } from './language.store';
import { HttpErrorResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';

type ContactState = {
  isSubmitting: boolean;
  isSubmitted: boolean;
  error?: IErrorModel
};

const initialState: ContactState = {
  isSubmitting: false,
  isSubmitted: false,
  error: undefined
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
  withMethods((store, emailService = inject(EmailService)) => ({
    setIsSubmitted(isSubmitted: boolean): void {
      patchState(store, { isSubmitted });
    },
    setIsSubmitting(isSubmitting: boolean): void {
      patchState(store, { isSubmitting });
    },
    resetError(): void {
      patchState(store, { error: undefined });
    },
    sendEmail: rxMethod<IEmailModel>(pipe(
      tap(() => patchState(store, { isSubmitting: true })),
      exhaustMap((email) =>
        // Envoi de l'email
        emailService.sendEmail(email).pipe(
          tap(() => {
            if (!environment.production) console.log('Email well submited.');
            patchState(store, { isSubmitted: true })
          }),
          catchError((error: HttpErrorResponse) => {
            if (!environment.production) console.error('Error submitting form:', error);
            patchState(store, { isSubmitted: false, error: { message: error.message } })
            return [];
          }),
          finalize(() => {
            if (!environment.production) console.log('Email submission process completed.');
            patchState(store, { isSubmitting: false })
          })
        )),
    )),
  }))
);