import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { TypeSkill } from '@shared/type-skill';
import { Skill } from '@shared/skill';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const skills = [
      { id: 11, name: 'Angular', type: TypeSkill.FrontEnd, power: 50 },
      { id: 12, name: 'VueJs', type: TypeSkill.FrontEnd, power: 75 },
      { id: 13, name: 'HTML5', type: TypeSkill.FrontEnd, power: 50 },
      { id: 14, name: 'CSS3', type: TypeSkill.FrontEnd, power: 50 },
      { id: 15, name: 'Javascript', type: TypeSkill.FrontEnd, power: 50 },
      { id: 16, name: 'TypeScript', type: TypeSkill.FrontEnd, power: 50 },
      { id: 15, name: 'C#', type: TypeSkill.BackEnd, power: 50 },
      { id: 16, name: 'Java', type: TypeSkill.BackEnd, power: 50 },
      { id: 17, name: 'Oracle', type: TypeSkill.BackEnd, power: 50 },
      { id: 18, name: 'Premiere', type: TypeSkill.Adobe, power: 50 },
      { id: 19, name: 'After Effects', type: TypeSkill.Adobe, power: 50 },
      { id: 20, name: 'Illustrator', type: TypeSkill.Adobe, power: 50 },
      { id: 21, name: 'Lightroom', type: TypeSkill.Adobe, power: 50 },
      { id: 22, name: 'Photoshop', type: TypeSkill.Adobe, power: 50 },
      { id: 23, name: 'French', type: TypeSkill.Langages, power: 50 },
      { id: 24, name: 'English', type: TypeSkill.Langages, power: 50 },
      { id: 25, name: 'Spanish', type: TypeSkill.Langages, power: 50 },
    ];
    return { skills };
  }

  // Overrides the genId method to ensure that a skill always has an id.
  // If the skills array is empty,
  // the method below returns the initial number (11).
  // if the skills array is not empty, the method below returns the highest
  // skill id + 1.
  genId(skills: Skill[]): number {
    return skills.length > 0 ? Math.max(...skills.map(skill => skill.id)) + 1 : 11;
  }
}
