import { Component, inject } from '@angular/core';
import { LanguageStore } from 'src/app/store/language.store';

@Component({
  selector: 'app-page-about',
  templateUrl: './page-about.component.html',
  styleUrls: ['./page-about.component.scss'],
  standalone: false
})
export class PageAboutComponent {
  readonly languageStore = inject(LanguageStore);

  public about = this.languageStore.getAboutTxt();

  constructor() { }
}
