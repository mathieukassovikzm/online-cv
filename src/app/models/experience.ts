export interface IExperienceModel {
  title: string;
  subTitle?: string;
  date?: string;
  place?: string;
  description?: IDescriptionModel;
  display: boolean;
}

export interface IDescriptionModel {
  dsc: string;
  tasks?: string[];
  technicalEnv?: string[];
}
