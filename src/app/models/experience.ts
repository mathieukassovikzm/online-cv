import { TypeExperienceEnum } from './enum';

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
