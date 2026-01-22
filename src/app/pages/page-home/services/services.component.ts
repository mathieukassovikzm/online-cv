import { Component, computed, Signal } from '@angular/core';
import { IServiceModel } from 'src/app/models/home';
import { IUiTxtHomeModel } from 'src/app/models/uiTxt';
import { HomeService } from 'src/app/services/home.service';
import { UiService } from 'src/app/services/ui.service';

@Component({
    selector: 'app-services',
    templateUrl: './services.component.html',
    styleUrls: ['./services.component.scss'],
    standalone: false
})
export class ServicesComponent {
  public sUiText: Signal<IUiTxtHomeModel> = computed(() => {
    return this.uiService.getUiTxt()()?.homeTxt;
  });
  public sServices: Signal<IServiceModel[]> = computed(() => {
    return this.homeService.getHome()().lstServices || [];
  });

  constructor(
    private homeService: HomeService,
    private uiService: UiService
  ) { }
}
