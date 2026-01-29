import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HomeStore } from 'src/app/store/home.store';
import { LanguageStore } from 'src/app/store/language.store';

const modules = [CommonModule, FormsModule];

@Component({
  selector: 'app-infos-recap',
  templateUrl: './infos-recap.component.html',
  styleUrls: ['./infos-recap.component.scss'],
  imports: [...modules],
  standalone: true
})
export class InfosRecapComponent {
  readonly homeStore = inject(HomeStore);

  public homeText = this.homeStore.getHomeTxt();

  constructor() { }
}
