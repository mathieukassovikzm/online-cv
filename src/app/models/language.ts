export interface ILanguageModel {
  code: CodeLanguageEnum;
  name: string;
  power: string;
}

export enum CodeLanguageEnum {
  FR,
  EN,
  ES
}
