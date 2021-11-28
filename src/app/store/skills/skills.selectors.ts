import { createSelector } from "@ngrx/store";
import { TypeSkillEnum } from "src/app/models/type-skill.enum";
import { AppState, getAppState } from "../app.state";

const getSkillsState = createSelector(getAppState, (state: AppState) => state.skillsState);

/* Récupération de l'entité store de la liste de skills */
export const getEntLstSkills = createSelector(getSkillsState, (skillsState) => skillsState.s_lstSkills);

/* Récupération de la liste complète de skills */
export const getLstSkills = createSelector(getSkillsState, (skillsState) => skillsState.s_lstSkills.lstSkills);

/* Récupération de la liste de skills d'un certain type */
export const getLstSkillsByType = (typeSkill: TypeSkillEnum) => createSelector(
  getLstSkills,
  (lstSkills) => lstSkills ?  lstSkills.filter(skill => skill.type === typeSkill) : []
);
