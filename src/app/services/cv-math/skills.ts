import { ISkillModel } from "src/app/models/skill";
import { TypeSkillEnum } from "src/app/models/type-skill.enum";

export const skills: ISkillModel[] = [
  { id: 11, name: "Angular", type: TypeSkillEnum.FrontEnd, power: 90 },
  { id: 12, name: "VueJs", type: TypeSkillEnum.FrontEnd, power: 80 },
  { id: 12, name: "Blazor", type: TypeSkillEnum.FrontEnd, power: 50 },
  { id: 13, name: "HTML5", type: TypeSkillEnum.FrontEnd, power: 90 },
  { id: 14, name: "CSS3", type: TypeSkillEnum.FrontEnd, power: 90 },
  { id: 15, name: "SCSS", type: TypeSkillEnum.FrontEnd, power: 90 },
  { id: 16, name: "Javascript", type: TypeSkillEnum.FrontEnd, power: 60 },
  { id: 17, name: "TypeScript", type: TypeSkillEnum.FrontEnd, power: 70 },
  { id: 18, name: "Wordpress", type: TypeSkillEnum.FrontEnd, power: 50 },
  { id: 19, name: "Divi", type: TypeSkillEnum.FrontEnd, power: 50 },

  { id: 30, name: "C#", type: TypeSkillEnum.BackEnd, power: 80 },
  { id: 31, name: "Java", type: TypeSkillEnum.BackEnd, power: 70 },
  { id: 32, name: "C++", type: TypeSkillEnum.BackEnd, power: 50 },

  { id: 40, name: "Oracle", type: TypeSkillEnum.BackEnd, power: 80 },
  { id: 41, name: "MySql", type: TypeSkillEnum.BackEnd, power: 50 },

  { id: 50, name: "Svn", type: TypeSkillEnum.Versionning, power: 60 },
  { id: 51, name: "Git", type: TypeSkillEnum.Versionning, power: 60 },

  { id: 60, name: "Visual Studio", type: TypeSkillEnum.Tools, power: 80 },
  { id: 61, name: "Visual Studio Code", type: TypeSkillEnum.Tools, power: 80 },
  { id: 62, name: "Atom", type: TypeSkillEnum.Tools, power: 60 },
  { id: 63, name: "GitKraken", type: TypeSkillEnum.Tools, power: 60 },
  { id: 64, name: "SourceTree", type: TypeSkillEnum.Tools, power: 60 },

  { id: 70, name: "Premiere", type: TypeSkillEnum.Adobe, power: 80 },
  { id: 71, name: "After Effects", type: TypeSkillEnum.Adobe, power: 60 },
  { id: 72, name: "Illustrator", type: TypeSkillEnum.Adobe, power: 60 },
  { id: 73, name: "Lightroom", type: TypeSkillEnum.Adobe, power: 90 },
  { id: 74, name: "Photoshop", type: TypeSkillEnum.Adobe, power: 40 },

  { id: 90, name: "French", type: TypeSkillEnum.Langages, power: 100 },
  { id: 91, name: "English", type: TypeSkillEnum.Langages, power: 100 },
  { id: 92, name: "Spanish", type: TypeSkillEnum.Langages, power: 90 }
]
