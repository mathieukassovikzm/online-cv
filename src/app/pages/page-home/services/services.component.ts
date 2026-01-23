import { Component, inject } from '@angular/core';
import { LanguageStore } from 'src/app/store/language.store';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss'],
  standalone: false
})
export class ServicesComponent {
  readonly languageStore = inject(LanguageStore);

  // public sUiText: Signal<IUiTxtHomeModel> = computed(() => {
  //   return this.uiStore.getUiTxt()?.homeTxt;
  // });
  // public sServices: Signal<IServiceModel[]> = computed(() => {
  //   return this.homeService.getHome()().lstServices || [];
  // });

  constructor() { }
}
