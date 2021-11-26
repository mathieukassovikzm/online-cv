import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';
import { skillReducer, SkillsState } from './skills/skills.reducer';
import { uiReducer, UiState } from './ui/ui.reducer';

export interface AppState {
  uiState: UiState;
  skillsState: SkillsState;
}

export const reducers: ActionReducerMap<AppState> = {
  uiState: uiReducer,
  skillsState: skillReducer
};

export const getAppState = createFeatureSelector<AppState>('appState');
