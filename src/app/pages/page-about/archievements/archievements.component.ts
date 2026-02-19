import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { IExperienceModel } from 'src/app/models/about';
import { IUiTxtAboutModel } from 'src/app/models/uiTxt';
import { CardComponent } from 'src/app/shared/components/card/card.component';
import { AboutStore } from 'src/app/store/about.store';
import { UiStore } from 'src/app/store/ui.store';

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
  readonly uiStore = inject(UiStore);
  readonly aboutStore = inject(AboutStore);

  public uiText: IUiTxtAboutModel = this.uiStore.getUiTxt().aboutTxt;
  public archievements: IExperienceModel[] = this.aboutStore.getAboutTxt().archievements || [];

  constructor() { }
}
