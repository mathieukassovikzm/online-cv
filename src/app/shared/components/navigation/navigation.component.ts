import { Component, OnInit } from '@angular/core';
import { CodeLanguageEnum } from 'src/app/models/enum';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent implements OnInit {
  public itemMenuActif = 1;
  // public photo = require('./../../../../assets/images/PhotoCv.jpg');

  constructor(private uiService: UiService) {}

  ngOnInit(): void {}

  switchMenu(idDtemClicked: number): void {
    this.itemMenuActif = idDtemClicked;
  }

  switchToFrench(): void {
    this.uiService.setUiLanguage(CodeLanguageEnum.FR);
  }

  switchToEnglish(): void {
    this.uiService.setUiLanguage(CodeLanguageEnum.EN);
  }

  switchToSpanish(): void {
    this.uiService.setUiLanguage(CodeLanguageEnum.ES);
  }
}
