import { Injectable } from '@angular/core';
import { CodeLanguageEnum } from '../models/enum';
import { IUiTxtModel } from '../models/uiTxt';
import { uiTxtEn, uiTxtEs, uiTxtFr } from './ui-txt/ui-txt';

@Injectable({
  providedIn: 'root',
})
export class UiService {
  private isNavOpen = false;
  private uiLanguage = CodeLanguageEnum.FR;

  constructor() {}

  toggleNav(): void {
    this.isNavOpen = !this.isNavOpen;
  }

  closeNav(): void {
    this.isNavOpen = false;
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

  getUiTxt(): IUiTxtModel {
    switch (this.uiLanguage) {
      case CodeLanguageEnum.FR:
        return uiTxtFr;
      case CodeLanguageEnum.EN:
        return uiTxtEn;
      case CodeLanguageEnum.ES:
        return uiTxtEs;
      default:
        return uiTxtFr;
    }
  }
}
