import { CommonModule } from '@angular/common';
import { Component, effect, inject, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { Subscription } from 'rxjs';
import { CodeLanguageEnum } from './models/enum';
import { SidePanelComponent } from './pages/side-panel/side-panel.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { NavigationComponent } from './shared/components/navigation/navigation.component';
import { LanguageStore } from './store/language.store';
import { UiStore } from './store/ui.store';

const modules = [
  CommonModule,
  RouterOutlet
];
const components = [
  NavigationComponent,
  SidePanelComponent,
  FooterComponent,
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [...modules, ...components],
  standalone: true
})
export class AppComponent implements OnInit, OnDestroy {
  readonly uiStore = inject(UiStore);
  readonly languageStore = inject(LanguageStore);

  title = 'online-cv-math';

  private subscription = new Subscription();

  constructor(private route: ActivatedRoute) {
    effect(() => {
      const isDarkmode = this.uiStore.darkMode();
      // Récupération de la balise <html> et manipulation de sa classe via Renderer2
      const htmlElement = document.documentElement;
      if (isDarkmode) {
        htmlElement.classList.add('dark-mode');
        htmlElement.classList.remove('light-mode');
      } else {
        htmlElement.classList.remove('dark-mode');
        htmlElement.classList.add('light-mode');
      }
    });

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
    switch (this.languageStore.uiLanguage()) {
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
