import { CodeLanguageEnum } from 'src/app/models/enum';
import { ILanguageModel } from 'src/app/models/infos';

export const languagesFr: ILanguageModel[] = [
  { code: CodeLanguageEnum.FR, name: 'Français', power: 'Langue maternelle' },
  { code: CodeLanguageEnum.EN, name: 'Anglais', power: 'Bilingue' },
  { code: CodeLanguageEnum.ES, name: 'Espagnol', power: 'Bilingue' },
];

export const languagesEn: ILanguageModel[] = [
  { code: CodeLanguageEnum.FR, name: 'French', power: 'Mother tongue' },
  { code: CodeLanguageEnum.EN, name: 'English', power: 'Bilingue' },
  { code: CodeLanguageEnum.ES, name: 'Spanish', power: 'Bilingue' },
];

export const languagesEs: ILanguageModel[] = [
  { code: CodeLanguageEnum.FR, name: 'Frances', power: 'Langua maternal' },
  { code: CodeLanguageEnum.EN, name: 'Ingles', power: 'Bilingue' },
  { code: CodeLanguageEnum.ES, name: 'Espanol', power: 'Bilingue' },
];
