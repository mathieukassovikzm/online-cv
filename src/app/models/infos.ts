import { CodeLanguageEnum, CodeSocialNetworkEnum, TypeSkillEnum } from './enum';
import { IQuestionReponseModel } from './QuestionReponse';

export interface IInfosModel {
  name: string;
  famillyName: string;
  title: string;
  available: boolean;
  infosPersonnal: IInfosPersonalModel;
  curriculum: IQuestionReponseModel;
}

export interface IInfosPersonalModel {
  birth: IQuestionReponseModel;
  nationality: IQuestionReponseModel;
  status: IQuestionReponseModel;
  drivingLiscence: IQuestionReponseModel;
  car: IQuestionReponseModel;
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
