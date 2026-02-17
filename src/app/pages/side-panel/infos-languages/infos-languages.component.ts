import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { CodeLanguageEnum } from 'src/app/models/enum';
import { SvgEnComponent } from 'src/app/shared/svgs/skills/language/svg-en/svg-en.component';
import { SvgEsComponent } from 'src/app/shared/svgs/skills/language/svg-es/svg-es.component';
import { SvgFrComponent } from 'src/app/shared/svgs/skills/language/svg-fr/svg-fr.component';
import { UiStore } from 'src/app/store/ui.store';

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
  readonly uiStore = inject(UiStore);

  public codeFr = CodeLanguageEnum.FR;
  public codeEn = CodeLanguageEnum.EN;
  public codeEs = CodeLanguageEnum.ES;

  constructor() { }
}
