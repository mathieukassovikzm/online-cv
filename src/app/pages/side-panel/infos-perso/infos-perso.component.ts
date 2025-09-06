import { Component, computed, Signal } from '@angular/core';
import { IInfosModel } from 'src/app/models/infos';
import { InfosService } from 'src/app/services/infos.service';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-infos-perso',
  templateUrl: './infos-perso.component.html',
  styleUrls: ['./infos-perso.component.scss'],
})
export class InfosPersoComponent {
  private sLanguage = this.uiService.getUiLanguage();
  public sInfosPerso: Signal<IInfosModel> = computed(() => {
    return this.infosService.getInfos(this.sLanguage());
  });

  constructor(
    private uiService: UiService,
    private infosService: InfosService
  ) {}

  ngOnInit() {}
}
