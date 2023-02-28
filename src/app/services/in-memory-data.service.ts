import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { ISkillModel } from '../models/skill';
import * as skillsMath from './cv-math/skills.json';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb(): any {
    const skills = skillsMath;
    return { skills };
  }

  // Overrides the genId method to ensure that a skill always has an id.
  // If the skills array is empty,
  // the method below returns the initial number (11).
  // if the skills array is not empty, the method below returns the highest
  // skill id + 1.
  genId(skills: ISkillModel[]): number {
    return skills.length > 0
      ? Math.max(...skills.map((skill) => skill.id)) + 1
      : 11;
  }
}
