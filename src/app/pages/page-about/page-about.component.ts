import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { LanguageStore } from 'src/app/store/language.store';
import { ExtractComponent } from './extract/extract.component';
import { HobbiesComponent } from './hobbies/hobbies.component';
import { LifeTimelineComponent } from './life-timeline/life-timeline.component';

const modules = [CommonModule];
const components = [
  // ArchievementsComponent,
  ExtractComponent,
  // EducationComponent,
  // WorkExperienceComponent,
  HobbiesComponent,
  // TravelsComponent,
  LifeTimelineComponent,
];

@Component({
  selector: 'app-page-about',
  templateUrl: './page-about.component.html',
  styleUrls: ['./page-about.component.scss'],
  imports: [...modules, ...components],
  standalone: true
})
export class PageAboutComponent {
  readonly languageStore = inject(LanguageStore);

  public about = this.languageStore.getAboutTxt();

  constructor() { }
}
