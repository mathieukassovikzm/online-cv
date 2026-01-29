import { CommonModule } from '@angular/common';
import { Component, computed, inject, Signal } from '@angular/core';
import { IServiceModel } from 'src/app/models/home';
import { IUiTxtHomeModel } from 'src/app/models/uiTxt';
import { HomeStore } from 'src/app/store/home.store';
import { UiStore } from 'src/app/store/ui.store';
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
  readonly uiStore = inject(UiStore);
  readonly homeStore = inject(HomeStore);

  public uiText: Signal<IUiTxtHomeModel> = computed(() => {
    return this.uiStore.getUiTxt()?.homeTxt;
  });
  public services: Signal<IServiceModel[]> = computed(() => {
    return this.homeStore.getHomeTxt().lstServices || [];
  });

  constructor() { }
}
