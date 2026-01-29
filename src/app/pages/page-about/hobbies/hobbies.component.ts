import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { LanguageStore } from 'src/app/store/language.store';
import { HobbyComponent } from './hobby/hobby.component';
import { AboutStore } from 'src/app/store/about.store';
import { UiStore } from 'src/app/store/ui.store';

const modules = [CommonModule];
const components = [HobbyComponent];

@Component({
  selector: 'app-hobbies',
  templateUrl: './hobbies.component.html',
  styleUrls: ['./hobbies.component.scss'],
  imports: [...modules, ...components],
  standalone: true
})
export class HobbiesComponent {
  readonly aboutStore = inject(AboutStore);
  readonly uiStore = inject(UiStore);

  public uiText = this.uiStore.getUiTxt().aboutTxt;
  public hobbies = this.aboutStore.getAboutTxt().hobbies || [];

  constructor() { }
}
