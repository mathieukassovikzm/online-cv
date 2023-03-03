import { IExperienceModel } from './experience';

export interface IAboutModel {
  extract?: string;
  educations?: IExperienceModel[];
  archievements?: IExperienceModel[];
}
