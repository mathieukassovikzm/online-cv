import { Component, computed, Signal } from '@angular/core';
import {
  IInfosModel
} from 'src/app/models/infos';
import { InfosService } from 'src/app/services/infos.service';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  private sLanguage = this.uiService.getUiLanguage();
  public sInfosPerso: Signal<IInfosModel> = computed(() => {
    return this.infosService.getInfos(this.sLanguage());
  });

  constructor(
    private uiService: UiService,
    private infosService: InfosService
  ) {}
}
