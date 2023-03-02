import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CodeLanguageEnum } from './models/enum';
import { UiService } from './services/ui.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'online-cv-math';
  private lang: CodeLanguageEnum = CodeLanguageEnum.FR;

  private subscription = new Subscription();

  constructor(public uiService: UiService) {}

  ngOnInit() {
    this.lang = this.uiService.getUiLanguage();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  isOpen(): boolean {
    return this.uiService.getIsNavOpen();
  }

  onLang(): string {
    switch (this.lang) {
      case CodeLanguageEnum.FR:
        return 'lang-fr';
      case CodeLanguageEnum.EN:
        return 'lang-en';
      case CodeLanguageEnum.ES:
        return 'lang-es';
      default:
        return '';
    }
  }

  curtainClicked(): void {
    this.uiService.toggleNavOpen();
  }
}
