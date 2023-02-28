import { IQuestionReponseModel } from "./QuestionReponse";

export interface IInfosModel {
  name: string;
  famillyName: string;
  title: string;
  available: boolean;
  infosPersonnal: IInfosPersonalModel
}

export interface IInfosPersonalModel {
  birth: IQuestionReponseModel;
  nationality: IQuestionReponseModel;
  status: IQuestionReponseModel;
  drivingLiscence: IQuestionReponseModel;
  car: IQuestionReponseModel;
}
