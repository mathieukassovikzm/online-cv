import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { CardComponent } from 'src/app/shared/components/card/card.component';
import { LanguageStore } from 'src/app/store/language.store';

const modules = [CommonModule];
const components = [CardComponent];

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.scss'],
  imports: [...modules, ...components],
  standalone: true
})
export class WorkExperienceComponent {
  readonly languageStore = inject(LanguageStore);

  constructor() { }
}
