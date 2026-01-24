import { Component, inject } from '@angular/core';
import { IExperienceModel } from 'src/app/models/about';
import { IUiTxtAboutModel } from 'src/app/models/uiTxt';
import { LanguageStore } from 'src/app/store/language.store';

@Component({
  selector: 'app-archievements',
  templateUrl: './archievements.component.html',
  styleUrls: ['./archievements.component.scss'],
  standalone: false
})
export class ArchievementsComponent {
  readonly languageStore = inject(LanguageStore);

  public uiText: IUiTxtAboutModel = this.languageStore.getUiTxt().aboutTxt;
  public archievements: IExperienceModel[] = this.languageStore.getAboutTxt().archievements || [];

  constructor() { }
}
