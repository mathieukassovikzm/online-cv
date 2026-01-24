import { Component, inject } from '@angular/core';
import { LanguageStore } from 'src/app/store/language.store';

@Component({
  selector: 'app-lst-enterprises',
  templateUrl: './lst-enterprises.component.html',
  styleUrls: ['./lst-enterprises.component.scss'],
  standalone: false
})
export class LstEntreprisesComponent {
  readonly languageStore = inject(LanguageStore);

  constructor() { }
}
