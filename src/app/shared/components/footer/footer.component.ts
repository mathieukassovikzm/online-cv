import { Component, inject } from '@angular/core';
import { IInfosModel } from 'src/app/models/infos';
import { InfosService } from 'src/app/services/infos.service';
import { UiStore } from 'src/app/store/ui.store';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  standalone: true
})
export class FooterComponent {
  readonly uiStore = inject(UiStore);

  public infosPerso: IInfosModel = this.uiStore.getInfosTxt();

  constructor(private infosService: InfosService) { }
}
