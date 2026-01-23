import { computed, Injectable, signal, Signal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CodeLanguageEnum, PagesEnum } from '../models/enum';
import { IUiTxtModel } from '../models/uiTxt';
import { uiTxtEn, uiTxtEs, uiTxtFr } from './ui-txt/ui-txt';

@Injectable({
  providedIn: 'root',
})
export class UiService {
  private uiLanguage = signal(CodeLanguageEnum.FR);

  constructor(private router: Router, private route: ActivatedRoute) { }

  getUiLanguage(): Signal<CodeLanguageEnum> {
    return this.uiLanguage;
  }

  setUiLanguage(lang: CodeLanguageEnum): void {
    if (lang === undefined || lang === null) {
      lang = this.getUsersLocale(CodeLanguageEnum.FR);
    }
    this.uiLanguage.set(lang);
  }

  getUsersLocale(defaultValue: CodeLanguageEnum): CodeLanguageEnum {
    if (typeof window === 'undefined' || typeof window.navigator === 'undefined') {
      return defaultValue;
    }
    const wn = window.navigator as any;
    let lang = wn.languages ? wn.languages[0] : defaultValue;
    lang = lang || wn.language || wn.browserLanguage || wn.userLanguage;
    switch (lang) {
      case 'fr':
      case 'fr-FR':
      case 'fr-CA':
        return CodeLanguageEnum.FR;
      case 'en':
      case 'en-US':
      case 'en-GB':
        return CodeLanguageEnum.EN;
      case 'es':
      case 'es-ES':
      case 'es-MX':
        return CodeLanguageEnum.ES;
      default:
        return defaultValue;
    }
  }

  setUiLanguageAndNavigate(lang: CodeLanguageEnum): void {
    this.setUiLanguage(lang);
    // With query parameters
    this.router.navigate([], {
      queryParams: { lang },
      relativeTo: this.route,
      queryParamsHandling: 'merge',
    });
  }

  getUiTxt(): Signal<IUiTxtModel> {
    return computed(() => {
      const language = this.getUiLanguage();
      switch (language()) {
        case CodeLanguageEnum.FR:
          return uiTxtFr;
        case CodeLanguageEnum.EN:
          return uiTxtEn;
        case CodeLanguageEnum.ES:
          return uiTxtEs;
        default:
          return uiTxtFr;
      }
    });
  }

  getUiPageName(page: PagesEnum): Signal<string> {
    return computed(() => {
      const navTxt = this.getUiTxt()().navTxt;

      switch (page) {
        case PagesEnum.HOME:
          return navTxt.homeTitle;
        case PagesEnum.ABOUT:
          return navTxt.aboutTitle;
        case PagesEnum.PROJECTS:
          return navTxt.projectsTitle;
        case PagesEnum.CONTACTS:
          return navTxt.contactTitle;
        default:
          return '';
      }
    });
  }
}
