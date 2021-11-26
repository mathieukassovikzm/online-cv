import { createAction, props } from '@ngrx/store';
import { ISkillModel } from 'src/app/models/skill';

export const ActSkillsGetLstSkills = createAction('[Skills] ActSkillsGetLstSkills');
export const ActSkillsGetLstSkillsSuccess = createAction('[Skills] ActSkillsGetLstSkillsSuccess', props<{ lstSkills: ISkillModel[] }>());
export const ActSkillsGetLstSkillsError = createAction('[Skills] ActSkillsGetLstSkillsError', props<{ error: any }>());

export const ActSkillsGetSkill = createAction('[Skills] ActSkillsGetSkill', props<{ id: number }>());
export const ActSkillsGetSkillSuccess = createAction('[Skills] ActSkillsGetSkillSuccess', props<{ skill: ISkillModel }>());
export const ActSkillsGetSkillError = createAction('[Skills] ActSkillsGetSkillError', props<{ error: any }>());
