import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { IExperienceModel } from 'src/app/models/about';
import { IUiTxtAboutModel } from 'src/app/models/uiTxt';
import { CardComponent } from 'src/app/shared/components/card/card.component';
import { LanguageStore } from 'src/app/store/language.store';

const modules = [CommonModule];
const components = [CardComponent];

@Component({
  selector: 'app-archievements',
  templateUrl: './archievements.component.html',
  styleUrls: ['./archievements.component.scss'],
  imports: [...modules, ...components],
  standalone: true
})
export class ArchievementsComponent {
  readonly languageStore = inject(LanguageStore);

  public uiText: IUiTxtAboutModel = this.languageStore.getUiTxt().aboutTxt;
  public archievements: IExperienceModel[] = this.languageStore.getAboutTxt().archievements || [];

  constructor() { }
}
