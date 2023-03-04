import { TypeExperienceEnum } from './enum';

export interface IExperienceModel {
  title: string;
  company?: string;
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
