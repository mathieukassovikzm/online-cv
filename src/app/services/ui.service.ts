import { Injectable } from '@angular/core';
import { LanguagesEnum } from '../models/laguages.enum';

@Injectable({
  providedIn: 'root',
})
export class UiService {
  isNavOpen = true;
  uiLanguage = LanguagesEnum.French;

  constructor() { }

  toggleNavOpen(): void {
    this.isNavOpen = !this.isNavOpen;
  }

  getUiLanguage(): LanguagesEnum {
    return this.uiLanguage;
  }

  setUiLanguage(lang: LanguagesEnum): void {
    this.uiLanguage = lang;
  }
}
