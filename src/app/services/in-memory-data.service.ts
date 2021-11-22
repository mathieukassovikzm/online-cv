import { Injectable } from '@angular/core';
import { ISkillModel } from '@app/models/skill';
import { TypeSkillEnum } from '@app/models/type-skill.enum';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb(): any {
    const skills = [
      { id: 11, name: 'Angular', type: TypeSkillEnum.FrontEnd, power: 50 },
      { id: 12, name: 'VueJs', type: TypeSkillEnum.FrontEnd, power: 75 },
      { id: 13, name: 'HTML5', type: TypeSkillEnum.FrontEnd, power: 50 },
      { id: 14, name: 'CSS3', type: TypeSkillEnum.FrontEnd, power: 50 },
      { id: 15, name: 'Javascript', type: TypeSkillEnum.FrontEnd, power: 50 },
      { id: 16, name: 'TypeScript', type: TypeSkillEnum.FrontEnd, power: 50 },
      { id: 15, name: 'C#', type: TypeSkillEnum.BackEnd, power: 50 },
      { id: 16, name: 'Java', type: TypeSkillEnum.BackEnd, power: 50 },
      { id: 17, name: 'Oracle', type: TypeSkillEnum.BackEnd, power: 50 },
      { id: 18, name: 'Premiere', type: TypeSkillEnum.Adobe, power: 50 },
      { id: 19, name: 'After Effects', type: TypeSkillEnum.Adobe, power: 50 },
      { id: 20, name: 'Illustrator', type: TypeSkillEnum.Adobe, power: 50 },
      { id: 21, name: 'Lightroom', type: TypeSkillEnum.Adobe, power: 50 },
      { id: 22, name: 'Photoshop', type: TypeSkillEnum.Adobe, power: 50 },
      { id: 23, name: 'French', type: TypeSkillEnum.Langages, power: 50 },
      { id: 24, name: 'English', type: TypeSkillEnum.Langages, power: 50 },
      { id: 25, name: 'Spanish', type: TypeSkillEnum.Langages, power: 50 },
    ];
    return { skills };
  }

  // Overrides the genId method to ensure that a skill always has an id.
  // If the skills array is empty,
  // the method below returns the initial number (11).
  // if the skills array is not empty, the method below returns the highest
  // skill id + 1.
  genId(skills: ISkillModel[]): number {
    return skills.length > 0 ? Math.max(...skills.map(skill => skill.id)) + 1 : 11;
  }
}
