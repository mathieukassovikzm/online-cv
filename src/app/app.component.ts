import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CodeLanguageEnum } from './models/enum';
import { UiService } from './services/ui.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
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

  isOpen(): boolean {
    return this.uiService.getIsNavOpen();
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
    this.uiService.toggleNav();
  }
}
