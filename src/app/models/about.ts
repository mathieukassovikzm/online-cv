import { TypeExperienceEnum, TypeHobbyEnum } from './enum';

export interface IAboutModel {
  extract?: string;
  educations?: IExperienceModel[];
  archievements?: IExperienceModel[];
  experiencesPro?: IExperienceModel[];
  hobbies?: IHobbyModel[];
  travels?: IExperienceModel[];
}

export interface IHobbyModel {
  title: string;
  description?: string[];
  photo?: string;
  type?: TypeHobbyEnum;
}

export interface IExperienceModel {
  title: string;
  company?: string;
  dateEnd: Date;
  date?: string;
  address?: string;
  description?: IDescriptionModel;
  typeExpe: TypeExperienceEnum;
  display: boolean;
}

export interface IDescriptionModel {
  dsc: string;
  tasks?: string[];
  technicalEnv?: string[];
}
