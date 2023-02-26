import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { LanguagesEnum } from 'src/app/models/laguages.enum';
import { ActUiSetLanguage } from 'src/app/store/ui/ui.actions';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent implements OnInit {
  public itemMenuActif = 1;
  // public photo = require('./../../../../assets/images/PhotoCv.jpg');

  constructor(private store: Store) {}

  ngOnInit(): void {}

  switchMenu(idDtemClicked: number): void {
    this.itemMenuActif = idDtemClicked;
  }

  switchToFrench(): void {
    this.store.dispatch(ActUiSetLanguage({ language: LanguagesEnum.French }));
  }

  switchToEnglish(): void {
    this.store.dispatch(ActUiSetLanguage({ language: LanguagesEnum.English }));
  }

  switchToSpanish(): void {
    this.store.dispatch(ActUiSetLanguage({ language: LanguagesEnum.Spanish }));
  }
}
