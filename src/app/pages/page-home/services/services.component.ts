import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { LanguageStore } from 'src/app/store/language.store';
import { ServiceComponent } from './service/service.component';

const modules = [CommonModule];
const components = [ServiceComponent];

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss'],
  imports: [...modules, ...components],
  standalone: true
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
