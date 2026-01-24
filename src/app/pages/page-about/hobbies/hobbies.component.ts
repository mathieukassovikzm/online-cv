import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { LanguageStore } from 'src/app/store/language.store';
import { HobbyComponent } from './hobby/hobby.component';

const modules = [CommonModule];
const components = [HobbyComponent];

@Component({
  selector: 'app-hobbies',
  templateUrl: './hobbies.component.html',
  styleUrls: ['./hobbies.component.scss'],
  imports: [...modules, ...components],
  standalone: true
})
export class HobbiesComponent {
  readonly languageStore = inject(LanguageStore);

  public uiText = this.languageStore.getUiTxt().aboutTxt;
  public hobbies = this.languageStore.getAboutTxt().hobbies || [];

  constructor() { }
}
