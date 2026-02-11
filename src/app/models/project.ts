import { TypeProjectEnum } from './enum';

export interface IProjectModel {
  id: number;
  title: string;
  description?: string;
  photo?: string;
  link?: string;
  type?: TypeProjectEnum;
}
