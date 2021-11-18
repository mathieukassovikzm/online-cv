import { TypeSkill } from './type-skill';

export interface ISkillModel {
  id: number;
  name: string;
  type: TypeSkill;
  power: number;
}
