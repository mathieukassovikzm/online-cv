import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CodeLanguageEnum } from './models/enum';
import { UiService } from './services/ui.service';
import { ActivatedRoute } from '@angular/router';
import { UiStore } from './store/ui.store';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    standalone: false
})
export class AppComponent implements OnInit, OnDestroy {
  readonly uiStore = inject(UiStore);

  title = 'online-cv-math';
  private sLanguage = this.uiService.getUiLanguage();

  private subscription = new Subscription();

  constructor(public uiService: UiService, private route: ActivatedRoute) {
    this.route.queryParams.subscribe((params) => {
      const lang = params['lang'];
      this.uiService.setUiLanguage(lang);
    });
  }

  ngOnInit() {}

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onLang(): string {
    switch (this.sLanguage()) {
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
