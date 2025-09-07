import { Component, computed, Signal } from '@angular/core';
import { IInfosPersonalModel } from 'src/app/models/infos';
import { IUiTxtInfosPersoModel } from 'src/app/models/uiTxt';
import { InfosService } from 'src/app/services/infos.service';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-infos-perso',
  templateUrl: './infos-perso.component.html',
  styleUrls: ['./infos-perso.component.scss'],
})
export class InfosPersoComponent {
  public sUiText: Signal<IUiTxtInfosPersoModel> = computed(() => {
    return this.uiService.getUiTxt()().sidePanelTxt.infosPersoTitles;
  });
  public sInfosPerso: Signal<IInfosPersonalModel> = computed(() => {
    return this.infosService.getInfos()().infosPersonnal;
  });

  constructor(
    private uiService: UiService,
    private infosService: InfosService
  ) {}

  ngOnInit() {}
}
