import { Component, inject } from '@angular/core';
import { LanguageStore } from 'src/app/store/language.store';

@Component({
  selector: 'app-infos-recap',
  templateUrl: './infos-recap.component.html',
  styleUrls: ['./infos-recap.component.scss'],
  standalone: false
})
export class InfosRecapComponent {
  readonly languageStore = inject(LanguageStore);

  constructor() { }
}
