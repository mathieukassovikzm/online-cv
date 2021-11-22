import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';
import { uiReducer, UiState } from './ui/ui.reducer';

export interface AppState {
  uiState: UiState;
}

export const reducers: ActionReducerMap<AppState> = {
  uiState: uiReducer
};

export const getAppState = createFeatureSelector<AppState>('appState');
