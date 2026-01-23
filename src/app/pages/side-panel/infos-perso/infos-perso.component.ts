import { Component, inject } from '@angular/core';
import { LanguageStore } from 'src/app/store/language.store';

@Component({
    selector: 'app-infos-perso',
    templateUrl: './infos-perso.component.html',
    styleUrls: ['./infos-perso.component.scss'],
    standalone: false
})
export class InfosPersoComponent {
  readonly languageStore = inject(LanguageStore);

  constructor(  ) {}
}
