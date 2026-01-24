import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { SvgQuoteComponent } from 'src/app/shared/svgs/ui/svg-quote/svg-quote.component';
import { LanguageStore } from 'src/app/store/language.store';

const modules = [CommonModule];
const svgs = [SvgQuoteComponent];

@Component({
  selector: 'app-extract',
  templateUrl: './extract.component.html',
  styleUrls: ['./extract.component.scss'],
  imports: [...modules, ...svgs],
  standalone: true
})
export class ExtractComponent {
  readonly languageStore = inject(LanguageStore);

  public uiText = this.languageStore.getUiTxt().aboutTxt;
  public extract = this.languageStore.getAboutTxt().extract || '';

  constructor() { }
}
