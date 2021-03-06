import { TypeSkill } from './type-skill';

export interface Skill {
  id: number;
  name: string;
  type: TypeSkill;
  power: number
}
