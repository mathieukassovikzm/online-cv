import { createReducer, on } from '@ngrx/store';
import { LanguagesEnum } from 'src/app/models/laguages.enum';
import { ActUiSetLanguage } from './ui.actions';

export interface UiState {
  s_language: LanguagesEnum;
}

// Initial state of the store
const initialUiState: UiState = {
  s_language: LanguagesEnum.French
};

export const uiReducer = createReducer(
  initialUiState,
  on(ActUiSetLanguage, (state, { language }) => ({ ...state, s_language: language }))
);
