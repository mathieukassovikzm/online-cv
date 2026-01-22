import { Component, computed, Signal } from '@angular/core';
import { IRecapModel } from 'src/app/models/home';
import { IUiTxtAboutModel } from 'src/app/models/uiTxt';
import { HomeService } from 'src/app/services/home.service';
import { UiService } from 'src/app/services/ui.service';

@Component({
    selector: 'app-infos-recap',
    templateUrl: './infos-recap.component.html',
    styleUrls: ['./infos-recap.component.scss'],
    standalone: false
})
export class InfosRecapComponent {
  public sUiText: Signal<IUiTxtAboutModel> = computed(() => {
    return this.uiService.getUiTxt()()?.aboutTxt;
  });
  public sLstRecap: Signal<IRecapModel[]> = computed(() => {
    return this.homeService.getHome()().lstRecap;
  });

  constructor(private homeService: HomeService, private uiService: UiService) {}
}
