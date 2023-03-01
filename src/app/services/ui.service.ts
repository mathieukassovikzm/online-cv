import { Injectable } from '@angular/core';
import { LanguagesEnum } from '../models/laguages.enum';

@Injectable({
  providedIn: 'root',
})
export class UiService {
  private isNavOpen = false;
  private uiLanguage = LanguagesEnum.French;

  constructor() { }

  toggleNavOpen(): void {
    this.isNavOpen = !this.isNavOpen;
  }

  getIsNavOpen(): boolean {
    return this.isNavOpen;
  }

  getUiLanguage(): LanguagesEnum {
    return this.uiLanguage;
  }

  setUiLanguage(lang: LanguagesEnum): void {
    this.uiLanguage = lang;
  }
}
