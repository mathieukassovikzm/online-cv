import { Component, OnInit } from '@angular/core';
import { LanguagesEnum } from 'src/app/models/laguages.enum';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent implements OnInit {
  public itemMenuActif = 1;
  // public photo = require('./../../../../assets/images/PhotoCv.jpg');

  constructor(private uiService: UiService) { }

  ngOnInit(): void { }

  switchMenu(idDtemClicked: number): void {
    this.itemMenuActif = idDtemClicked;
  }

  switchToFrench(): void {
    this.uiService.setUiLanguage(LanguagesEnum.French);
  }

  switchToEnglish(): void {
    this.uiService.setUiLanguage(LanguagesEnum.English);
  }

  switchToSpanish(): void {
    this.uiService.setUiLanguage(LanguagesEnum.Spanish);
  }
}
