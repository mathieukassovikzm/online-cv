import { Component, inject } from '@angular/core';
import { LanguageStore } from 'src/app/store/language.store';

@Component({
  selector: 'app-hobbies',
  templateUrl: './hobbies.component.html',
  styleUrls: ['./hobbies.component.scss'],
  standalone: false
})
export class HobbiesComponent {
  readonly languageStore = inject(LanguageStore);

  public uiText = this.languageStore.getUiTxt().aboutTxt;
  public hobbies = this.languageStore.getAboutTxt().hobbies || [];

  constructor() { }
}
