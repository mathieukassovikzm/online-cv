import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { CardComponent } from 'src/app/shared/components/card/card.component';
import { LanguageStore } from 'src/app/store/language.store';

const modules = [CommonModule];
const components = [CardComponent];

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss'],
  imports: [...modules, ...components],
  standalone: true
})
export class EducationComponent {
  readonly languageStore = inject(LanguageStore);

  public uiText = this.languageStore.getUiTxt().aboutTxt;
  public educations = this.languageStore.getAboutTxt().educations || [];

  constructor() { }
}
