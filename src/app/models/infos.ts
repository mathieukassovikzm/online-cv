import { CodeLanguageEnum, CodeSocialNetworkEnum, TypeSkillEnum } from './enum';

export interface IInfosModel {
  name: string;
  famillyName: string;
  title?: string;
  email: string;
  address: string;
  available: boolean;
  infosPersonnal?: IInfosPersonalModel;
  curriculum?: string;
}

export interface IInfosPersonalModel {
  birth?: string;
  nationality?: string;
  status?: string;
  drivingLiscence?: string;
  car?: string;
}

export interface ISkillModel {
  id: number;
  name: string;
  type: TypeSkillEnum;
  power: number;
  display: boolean;
}

export interface ISocialNetwork {
  code: CodeSocialNetworkEnum;
  name: string;
  url: string;
  display: boolean;
}

export interface ILanguageModel {
  code: CodeLanguageEnum;
  name: string;
  power: string;
}
