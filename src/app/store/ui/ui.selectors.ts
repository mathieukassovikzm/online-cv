import { createSelector } from "@ngrx/store";
import { AppState, getAppState } from "../app.state";

const getUiState = createSelector(getAppState, (state: AppState) => state.uiState);

/* Récupération de la langue courante */
export const getUiLanguage = createSelector(getUiState, (uiState) => uiState.s_language);