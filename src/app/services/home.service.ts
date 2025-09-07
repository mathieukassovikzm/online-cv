import { computed, Injectable, Signal } from '@angular/core';
import { CodeLanguageEnum } from '../models/enum';
import { IHomeModel } from '../models/home';
import { homeEn, homeEs, homeFr } from './cv-math/dataHome';
import { UiService } from './ui.service';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  constructor(private uiService: UiService) {}

  getHome(): Signal<IHomeModel> {
    return computed(() => {
      const language = this.uiService.getUiLanguage();
      switch (language()) {
        case CodeLanguageEnum.FR:
          return homeFr;
        case CodeLanguageEnum.EN:
          return homeEn;
        case CodeLanguageEnum.ES:
          return homeEs;
        default:
          return homeFr;
      }
    });
  }
}
