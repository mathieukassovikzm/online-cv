import { createAction, props } from '@ngrx/store';
import { LanguagesEnum } from 'src/app/models/laguages.enum';

export const ActUiSetLanguage = createAction('[Ui] ActUiSetLanguage', props<{ language: LanguagesEnum }>());
