import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { LanguageStore } from 'src/app/store/language.store';

const modules = [CommonModule];

@Component({
  selector: 'app-infos-perso',
  templateUrl: './infos-perso.component.html',
  styleUrls: ['./infos-perso.component.scss'],
  imports: [...modules],
  standalone: true
})
export class InfosPersoComponent {
  readonly languageStore = inject(LanguageStore);
  public uiText = this.languageStore.getUiTxt().sidePanelTxt.infosPersoTitles;
  public infosPersonnal = this.languageStore.getInfosTxt().infosPersonnal;

  constructor() { }
}
