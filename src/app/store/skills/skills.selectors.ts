import { createSelector } from "@ngrx/store";
import { AppState, getAppState } from "../app.state";

const getSkillsState = createSelector(getAppState, (state: AppState) => state.skillsState);

/* Récupération de la liste de skills */
export const getLstSkills = createSelector(getSkillsState, (skillsState) => skillsState.s_lstSkills);