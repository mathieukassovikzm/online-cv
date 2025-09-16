import { TypeHobbyEnum } from './enum';

export interface IHobbyModel {
  title: string;
  description?: string[];
  photo?: string;
  type?: TypeHobbyEnum;
}
