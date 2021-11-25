import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { LanguagesEnum } from 'src/app/models/laguages.enum';
import { ActUiSetLanguage } from 'src/app/store/ui/ui.actions';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  constructor(private store: Store) { }

  ngOnInit(): void {
  }

  switchToFrench(): void {
    console.log('switchToFrench');
    this.store.dispatch(ActUiSetLanguage({ language: LanguagesEnum.French }));
  }

  switchToEnglish(): void {
    this.store.dispatch(ActUiSetLanguage({ language: LanguagesEnum.English }));
  }

  switchToSpanish(): void {
    this.store.dispatch(ActUiSetLanguage({ language: LanguagesEnum.Spanish }));
  }
}
