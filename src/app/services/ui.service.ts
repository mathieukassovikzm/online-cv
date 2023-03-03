import { Injectable } from '@angular/core';
import { CodeLanguageEnum } from '../models/enum';
import { IUiTxtAboutModel } from '../models/uiTxt';
import {
  uiTxtAboutEn,
  uiTxtAboutEs,
  uiTxtAboutFr,
} from './ui-txt/ui-txt-about';

@Injectable({
  providedIn: 'root',
})
export class UiService {
  private isNavOpen = false;
  private uiLanguage = CodeLanguageEnum.FR;

  constructor() {}

  toggleNavOpen(): void {
    this.isNavOpen = !this.isNavOpen;
  }

  getIsNavOpen(): boolean {
    return this.isNavOpen;
  }

  getUiLanguage(): CodeLanguageEnum {
    return this.uiLanguage;
  }

  setUiLanguage(lang: CodeLanguageEnum): void {
    this.uiLanguage = lang;
  }

  getUiTxtAbout(): IUiTxtAboutModel {
    switch (this.uiLanguage) {
      case CodeLanguageEnum.FR:
        return uiTxtAboutFr;
      case CodeLanguageEnum.EN:
        return uiTxtAboutEn;
      case CodeLanguageEnum.ES:
        return uiTxtAboutEs;
      default:
        return uiTxtAboutFr;
    }
  }
}
