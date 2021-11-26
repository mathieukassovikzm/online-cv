import { IStore } from "./i-store-entity";
import { ISkillModel } from "./skill";

export interface ISkillStoreModel extends IStore {
  skill: ISkillModel;
}

export interface ILstSkillStoreModel extends IStore {
  lstSkills: ISkillModel[];
}