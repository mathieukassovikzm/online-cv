import { ISkillModel } from "src/app/models/skill";
import { TypeSkillEnum } from "src/app/models/type-skill.enum";

export const skills: ISkillModel[] = [
  { id: 11, name: "Angular", type: TypeSkillEnum.FrontEnd, power: 90, display: true },
  { id: 12, name: "VueJs", type: TypeSkillEnum.FrontEnd, power: 80, display: true },
  { id: 12, name: "Blazor", type: TypeSkillEnum.FrontEnd, power: 50, display: false },
  { id: 13, name: "HTML5", type: TypeSkillEnum.FrontEnd, power: 90, display: true },
  { id: 14, name: "CSS3", type: TypeSkillEnum.FrontEnd, power: 90, display: true },
  { id: 15, name: "SCSS", type: TypeSkillEnum.FrontEnd, power: 90, display: true },
  { id: 16, name: "Javascript", type: TypeSkillEnum.FrontEnd, power: 60, display: true },
  { id: 17, name: "TypeScript", type: TypeSkillEnum.FrontEnd, power: 60, display: true },
  { id: 18, name: "Wordpress", type: TypeSkillEnum.FrontEnd, power: 50, display: false },
  { id: 19, name: "Divi", type: TypeSkillEnum.FrontEnd, power: 50, display: false },

  { id: 30, name: "C#", type: TypeSkillEnum.BackEnd, power: 80, display: true },
  { id: 31, name: "Java", type: TypeSkillEnum.BackEnd, power: 70, display: true },
  { id: 32, name: "C++", type: TypeSkillEnum.BackEnd, power: 50, display: false },

  { id: 40, name: "Oracle", type: TypeSkillEnum.Bdd, power: 80, display: true },
  { id: 41, name: "MySql", type: TypeSkillEnum.Bdd, power: 50, display: false },

  { id: 50, name: "Svn", type: TypeSkillEnum.Versionning, power: 60, display: false },
  { id: 51, name: "Git", type: TypeSkillEnum.Versionning, power: 80, display: true },

  { id: 60, name: "Visual Studio", type: TypeSkillEnum.Tools, power: 80, display: true },
  { id: 61, name: "Visual Studio Code", type: TypeSkillEnum.Tools, power: 80, display: true },
  { id: 62, name: "Atom", type: TypeSkillEnum.Tools, power: 60, display: true },
  { id: 63, name: "GitKraken", type: TypeSkillEnum.Tools, power: 60, display: true },
  { id: 64, name: "SourceTree", type: TypeSkillEnum.Tools, power: 60, display: false },

  { id: 70, name: "Premiere", type: TypeSkillEnum.Adobe, power: 80, display: true },
  { id: 71, name: "After Effects", type: TypeSkillEnum.Adobe, power: 60, display: true },
  { id: 72, name: "Illustrator", type: TypeSkillEnum.Adobe, power: 60, display: true },
  { id: 73, name: "Lightroom", type: TypeSkillEnum.Adobe, power: 90, display: true },
  { id: 74, name: "Photoshop", type: TypeSkillEnum.Adobe, power: 40, display: true },
]
