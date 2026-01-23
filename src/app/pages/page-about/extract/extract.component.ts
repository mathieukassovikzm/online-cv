import { Component, inject } from '@angular/core';
import { LanguageStore } from 'src/app/store/language.store';

@Component({
  selector: 'app-extract',
  templateUrl: './extract.component.html',
  styleUrls: ['./extract.component.scss'],
  standalone: false
})
export class ExtractComponent {
  readonly languageStore = inject(LanguageStore);

  public uiText = this.languageStore.getUiTxt().aboutTxt;
  public extract = this.languageStore.getAboutTxt().extract || '';

  constructor() { }
}
