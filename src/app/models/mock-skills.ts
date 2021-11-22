import { TypeSkillEnum } from './type-skill.enum';
import { ISkillModel } from './skill';

export const SKILLS: ISkillModel[] = [
  { id: 11, name: 'Angular', type: TypeSkillEnum.FrontEnd, power: 50 },
  { id: 12, name: 'VueJs', type: TypeSkillEnum.FrontEnd, power: 75 },
  { id: 13, name: 'HTML5', type: TypeSkillEnum.FrontEnd, power: 50 },
  { id: 14, name: 'CSS3', type: TypeSkillEnum.FrontEnd, power: 50 },
  { id: 15, name: 'Javascript', type: TypeSkillEnum.FrontEnd, power: 50 },
  { id: 16, name: 'TypeScript', type: TypeSkillEnum.FrontEnd, power: 50 },

  { id: 20, name: 'C#', type: TypeSkillEnum.BackEnd, power: 50 },
  { id: 21, name: 'Java', type: TypeSkillEnum.BackEnd, power: 50 },
  { id: 22, name: 'Oracle', type: TypeSkillEnum.BackEnd, power: 50 },

  { id: 30, type: TypeSkillEnum.Adobe, name: 'Premiere', power: 50 },
  { id: 31, name: 'After Effects', type: TypeSkillEnum.Adobe, power: 50 },
  { id: 32, name: 'Illustrator', type: TypeSkillEnum.Adobe, power: 50 },
  { id: 33, name: 'Lightroom', type: TypeSkillEnum.Adobe, power: 50 },
  { id: 34, name: 'Photoshop', type: TypeSkillEnum.Adobe, power: 50 },

  { id: 40, name: 'Git', type: TypeSkillEnum.DevOps, power: 50 },


  { id: 50, name: 'French', type: TypeSkillEnum.Langages, power: 50 },
  { id: 51, name: 'English', type: TypeSkillEnum.Langages, power: 50 },
  { id: 52, name: 'Spanish', type: TypeSkillEnum.Langages, power: 50 },
];
