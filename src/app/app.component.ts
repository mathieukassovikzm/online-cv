import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { CodeLanguageEnum } from './models/enum';
import { UiService } from './services/ui.service';
import { LanguageStore } from './store/language.store';
import { UiStore } from './store/ui.store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: false
})
export class AppComponent implements OnInit, OnDestroy {
  readonly uiStore = inject(UiStore);
  readonly languageStore = inject(LanguageStore);

  title = 'online-cv-math';
  private language = this.languageStore.uiLanguage();

  private subscription = new Subscription();

  constructor(public uiService: UiService, private route: ActivatedRoute) {
    this.route.queryParams.subscribe((params) => {
      const lang = params['lang'];
      this.languageStore.setUiLanguage(lang);
    });
  }

  ngOnInit() { }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onLang(): string {
    switch (this.language) {
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
    this.uiStore.toggleNav();
  }
}
