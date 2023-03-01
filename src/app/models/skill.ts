import { TypeSkillEnum } from './type-skill.enum';

export interface ISkillModel {
  id: number;
  name: string;
  type: TypeSkillEnum;
  power: number;
  display: boolean;
}