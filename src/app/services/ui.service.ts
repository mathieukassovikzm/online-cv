import { computed, Injectable, signal, Signal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CodeLanguageEnum, PagesEnum } from '../models/enum';
import { IUiTxtModel } from '../models/uiTxt';
import { uiTxtEn, uiTxtEs, uiTxtFr } from './ui-txt/ui-txt';

@Injectable({
  providedIn: 'root',
})
export class UiService {
  private isNavOpen = false;
  private uiLanguage = signal(CodeLanguageEnum.FR);

  constructor(private router: Router, private route: ActivatedRoute) { }

  toggleNav(): void {
    this.isNavOpen = !this.isNavOpen;
  }

  closeNav(): void {
    this.isNavOpen = false;
  }

  getIsNavOpen(): boolean {
    return this.isNavOpen;
  }

  getUiLanguage(): Signal<CodeLanguageEnum> {
    return this.uiLanguage;
  }

  setUiLanguage(lang: CodeLanguageEnum): void {
    this.uiLanguage.set(lang);
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
