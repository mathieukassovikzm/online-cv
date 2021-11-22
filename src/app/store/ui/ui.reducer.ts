import { LanguagesEnum } from '@app/models/laguages.enum';
import { createReducer, on } from '@ngrx/store';
import { ActUiSetMenuOpened } from './ui.actions';

export interface UiState {
  s_language: LanguagesEnum;
}

// Initial state of the store
const initialUiState: UiState = {
  s_language: LanguagesEnum.French
};

export const uiReducer = createReducer(
  initialUiState,
  on(ActUiSetMenuOpened, (state, { language }) => ({ ...state, s_language: language }))
);
