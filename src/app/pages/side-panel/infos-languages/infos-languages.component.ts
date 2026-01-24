import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { CodeLanguageEnum } from 'src/app/models/enum';
import { SvgEnComponent } from 'src/app/shared/svgs/skills/language/svg-en/svg-en.component';
import { SvgEsComponent } from 'src/app/shared/svgs/skills/language/svg-es/svg-es.component';
import { SvgFrComponent } from 'src/app/shared/svgs/skills/language/svg-fr/svg-fr.component';
import { LanguageStore } from 'src/app/store/language.store';

const modules = [CommonModule];
const svgs = [SvgFrComponent, SvgEnComponent, SvgEsComponent];

@Component({
  selector: 'app-infos-languages',
  templateUrl: './infos-languages.component.html',
  styleUrls: ['./infos-languages.component.scss'],
  imports: [...modules, ...svgs],
  standalone: true
})
export class InfosLanguagesComponent {
  readonly languageStore = inject(LanguageStore);

  public codeFr = CodeLanguageEnum.FR;
  public codeEn = CodeLanguageEnum.EN;
  public codeEs = CodeLanguageEnum.ES;

  constructor() { }
}
