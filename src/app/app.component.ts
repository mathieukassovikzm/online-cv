import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { LanguagesEnum } from './models/laguages.enum';
import { UiService } from './services/ui.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'online-cv-math';
  private lang: LanguagesEnum = LanguagesEnum.French;

  private subscription = new Subscription();

  constructor(public uiService: UiService) {
  }

  ngOnInit() {
    this.lang = this.uiService.getUiLanguage();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  isOpen(): boolean {
    return this.uiService.isNavOpen;
  }

  onLang(): string {
    switch (this.lang) {
      case LanguagesEnum.French:
        return 'lang-fr';
      case LanguagesEnum.English:
        return 'lang-en';
      case LanguagesEnum.Spanish:
        return 'lang-es';
      default:
        return '';
    }
  }
}
