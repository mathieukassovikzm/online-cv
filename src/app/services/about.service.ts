import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IAboutModel } from '../models/about';
import { CodeLanguageEnum } from '../models/enum';
import { aboutEn, aboutEs, aboutFr } from './cv-math/dataAbout';
import { UiService } from './ui.service';

@Injectable({
  providedIn: 'root',
})
export class AboutService {
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(public uiService: UiService) {}

  getAbout(): IAboutModel {
    switch (this.uiService.getUiLanguage()) {
      case CodeLanguageEnum.FR:
        return aboutFr;
      case CodeLanguageEnum.EN:
        return aboutEn;
      case CodeLanguageEnum.ES:
        return aboutEs;
      default:
        return aboutFr;
    }
  }
}
