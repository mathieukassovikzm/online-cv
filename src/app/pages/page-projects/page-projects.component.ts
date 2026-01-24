import { Component, inject } from '@angular/core';
import { LanguageStore } from 'src/app/store/language.store';

@Component({
  selector: 'app-page-projects',
  templateUrl: './page-projects.component.html',
  styleUrls: ['./page-projects.component.scss'],
  standalone: true
})
export class PageProjectsComponent {
  readonly languageStore = inject(LanguageStore);

  constructor() { }
}
