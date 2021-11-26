import { createReducer, on } from '@ngrx/store';
import { ILstSkillStoreModel, ISkillStoreModel } from 'src/app/models/skill-store-model';
import { ActSkillsGetLstSkills, ActSkillsGetLstSkillsError, ActSkillsGetLstSkillsSuccess, ActSkillsGetSkill, ActSkillsGetSkillError, ActSkillsGetSkillSuccess } from './skills.actions';

export interface SkillsState {
  s_skill: ISkillStoreModel;
  s_lstSkills: ILstSkillStoreModel;
}

// Initial state of the store
const initialUiState: SkillsState = {
  s_skill: <ISkillStoreModel>{
    skill: {},
    loading: false
  },
  s_lstSkills: <ILstSkillStoreModel>{
    lstSkills: [],
    loading: false
  }
};

export const skillReducer = createReducer(
  initialUiState,
  on(ActSkillsGetLstSkills, (state) => ({ ...state, s_lstSkills: <ILstSkillStoreModel>{ loading: true } })),
  on(ActSkillsGetLstSkillsSuccess, (state, { lstSkills }) => ({ ...state, s_lstSkills: <ILstSkillStoreModel>{ loading: false, lstSkills } })),
  on(ActSkillsGetLstSkillsError, (state, { error }) => ({ ...state, s_lstSkills: <ILstSkillStoreModel>{ loading: false, error } })),

  on(ActSkillsGetSkill, (state) => ({ ...state, s_skill: <ISkillStoreModel>{ loading: true } })),
  on(ActSkillsGetSkillSuccess, (state, { skill }) => ({ ...state, s_skill: <ISkillStoreModel>{ loading: false, skill } })),
  on(ActSkillsGetSkillError, (state, { error }) => ({ ...state, s_skill: <ISkillStoreModel>{ loading: false, error } }))
);
