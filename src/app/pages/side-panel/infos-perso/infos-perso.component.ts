import { CommonModule } from '@angular/common';
import { Component, computed, inject } from '@angular/core';
import { LanguageStore } from 'src/app/store/language.store';
import { UiStore } from 'src/app/store/ui.store';

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
  readonly uiStore = inject(UiStore);

  public uiText = computed(() => this.uiStore.getUiTxt()?.sidePanelTxt.infosPersoTitles);
  public infosPersonnal = computed(() => this.uiStore.getInfosTxt().infosPersonnal);

  constructor() { }
}
