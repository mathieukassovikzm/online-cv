import { Component, inject, OnInit } from '@angular/core';
import { CodeLanguageEnum } from 'src/app/models/enum';
import { IInfosModel } from 'src/app/models/infos';
import { IUiTxtModel } from 'src/app/models/uiTxt';
import { LanguageStore } from 'src/app/store/language.store';

@Component({
  selector: 'app-top-desc',
  templateUrl: './top-desc.component.html',
  styleUrls: ['./top-desc.component.scss'],
  standalone: false
})
export class TopDescComponent implements OnInit {
  readonly languageStore = inject(LanguageStore);

  public uiText = this.languageStore.getUiTxt().sidePanelTxt.topDescTitles;
  public infos: IInfosModel = this.languageStore.getInfosTxt();
  public codeFR = CodeLanguageEnum.FR;
  public codeEN = CodeLanguageEnum.EN;
  public codeES = CodeLanguageEnum.ES;

  constructor() { }

  ngOnInit(): void {
  }

  switchToFrench(): void {
    this.languageStore.setUiLanguageAndNavigate(CodeLanguageEnum.FR);
  }

  switchToEnglish(): void {
    this.languageStore.setUiLanguageAndNavigate(CodeLanguageEnum.EN);
  }

  switchToSpanish(): void {
    this.languageStore.setUiLanguageAndNavigate(CodeLanguageEnum.ES);
  }
}
