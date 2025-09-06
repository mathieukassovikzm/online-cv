import { Injectable } from '@angular/core';
import { CodeLanguageEnum } from '../models/enum';
import { IHomeModel } from '../models/home';
import { homeEn, homeEs, homeFr } from './cv-math/dataHome';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  constructor() {}

  getHome(language: CodeLanguageEnum): IHomeModel {
    switch (language) {
      case CodeLanguageEnum.FR:
        return homeFr;
      case CodeLanguageEnum.EN:
        return homeEn;
      case CodeLanguageEnum.ES:
        return homeEs;
      default:
        return homeFr;
    }
  }
}
