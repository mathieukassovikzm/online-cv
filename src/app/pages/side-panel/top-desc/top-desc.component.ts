import { CommonModule } from '@angular/common';
import { Component, computed, inject, OnInit } from '@angular/core';
import { CodeLanguageEnum } from 'src/app/models/enum';
import { BtnDarkModeComponent } from 'src/app/shared/components/btn-dark-mode/btn-dark-mode.component';
import { LstSocialsComponent } from 'src/app/shared/components/lst-socials/lst-socials.component';
import { AvailableTitlePipe } from 'src/app/shared/pipes';
import { SvgEnComponent } from 'src/app/shared/svgs/skills/language/svg-en/svg-en.component';
import { SvgEsComponent } from 'src/app/shared/svgs/skills/language/svg-es/svg-es.component';
import { SvgFrComponent } from 'src/app/shared/svgs/skills/language/svg-fr/svg-fr.component';
import { SvgDownloadComponent } from 'src/app/shared/svgs/ui/svg-download/svg-download.component';
import { LanguageStore } from 'src/app/store/language.store';
import { UiStore } from 'src/app/store/ui.store';

const modules = [CommonModule];
const svgs = [SvgDownloadComponent, SvgFrComponent, SvgEnComponent, SvgEsComponent];
const components = [LstSocialsComponent, BtnDarkModeComponent];

@Component({
  selector: 'app-top-desc',
  templateUrl: './top-desc.component.html',
  styleUrls: ['./top-desc.component.scss'],
  imports: [...modules, ...svgs, ...components, AvailableTitlePipe],
  standalone: true
})
export class TopDescComponent implements OnInit {
  readonly languageStore = inject(LanguageStore);
  readonly uiStore = inject(UiStore);

  public uiText = computed(() => this.uiStore.getUiTxt()?.sidePanelTxt.topDescTitles);
  public infos = computed(() => this.uiStore.getInfosTxt());

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
