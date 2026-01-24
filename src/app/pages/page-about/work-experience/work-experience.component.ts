import { Component, inject } from '@angular/core';
import { LanguageStore } from 'src/app/store/language.store';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.scss'],
  standalone: false
})
export class WorkExperienceComponent {
  readonly languageStore = inject(LanguageStore);

  constructor() { }
}
