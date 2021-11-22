import { LanguagesEnum } from '@app/models/laguages.enum';
import { createAction, props } from '@ngrx/store';

export const ActUiSetMenuOpened = createAction('[Ui] ActUiSetLanguage', props<{ language: LanguagesEnum }>());
