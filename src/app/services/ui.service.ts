import { Injectable } from '@angular/core';
import { CodeLanguageEnum } from '../models/enum';

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
}
