import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { LanguagesEnum } from './models/laguages.enum';
import { ActSkillsGetLstSkills } from './store/skills/skills.actions';
import { getUiLanguage } from './store/ui/ui.selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'online-cv-math';
  private lang$: Observable<LanguagesEnum> = new Observable<LanguagesEnum>();
  private lang: LanguagesEnum = LanguagesEnum.French;

  private subscription = new Subscription();

  constructor(private store: Store) {
    this.lang$ = store.select<LanguagesEnum>(getUiLanguage);
  }

  ngOnInit() {
    const subLang = this.lang$.subscribe(res => this.lang = res);
    this.subscription.add(subLang);

    this.store.dispatch(ActSkillsGetLstSkills());

  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
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
        return ''
    }
  }
}
