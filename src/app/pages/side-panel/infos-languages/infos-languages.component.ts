import { Component, inject } from '@angular/core';
import { CodeLanguageEnum } from 'src/app/models/enum';
import { LanguageStore } from 'src/app/store/language.store';

@Component({
  selector: 'app-infos-languages',
  templateUrl: './infos-languages.component.html',
  styleUrls: ['./infos-languages.component.scss'],
  standalone: false
})
export class InfosLanguagesComponent {
  readonly languageStore = inject(LanguageStore);

  public codeFr = CodeLanguageEnum.FR;
  public codeEn = CodeLanguageEnum.EN;
  public codeEs = CodeLanguageEnum.ES;

  constructor() { }
}
