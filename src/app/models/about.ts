import { IExperienceModel } from './experience';
import { IHobbyModel } from './hobby';

export interface IAboutModel {
  extract?: string;
  educations?: IExperienceModel[];
  archievements?: IExperienceModel[];
  experiencesPro?: IExperienceModel[];
  hobbies?: IHobbyModel[];
  travels?: IExperienceModel[];
}
