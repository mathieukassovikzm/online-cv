import { Component, computed, Signal } from '@angular/core';
import { IEnterpriseModel } from 'src/app/models/home';
import { IUiTxtAboutModel } from 'src/app/models/uiTxt';
import { HomeService } from 'src/app/services/home.service';
import { UiService } from 'src/app/services/ui.service';

@Component({
    selector: 'app-lst-enterprises',
    templateUrl: './lst-enterprises.component.html',
    styleUrls: ['./lst-enterprises.component.scss'],
    standalone: false
})
export class LstEntreprisesComponent {
  private sLanguage = this.uiService.getUiLanguage();
  public sUiText: Signal<IUiTxtAboutModel> = computed(() => {
    return this.uiService.getUiTxt()()?.aboutTxt;
  });
  public sLstEntreprises: Signal<IEnterpriseModel[]> = computed(() => {
    return this.homeService.getHome()().lstLogos;
  });

  constructor(private homeService: HomeService, private uiService: UiService) {}
}
