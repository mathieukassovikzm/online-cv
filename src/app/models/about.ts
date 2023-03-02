export interface IAboutModel {
  extract: string;
  educations: IEducationModel[];
}

export interface IEducationModel {
  title: string;
  school: string;
  date: string;
  place: string;
}
