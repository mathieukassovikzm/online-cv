import { TypeProjectEnum } from './enum';

export interface IProjectModel {
  title: string;
  description?: string;
  photo?: string;
  link?: string;
  type?: TypeProjectEnum;
}
