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



}
