import { Component, inject, Signal } from '@angular/core';
import { IInfosModel } from 'src/app/models/infos';
import { InfosService } from 'src/app/services/infos.service';
import { LanguageStore } from 'src/app/store/language.store';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss'],
    standalone: false
})
export class FooterComponent {
  readonly languageStore = inject(LanguageStore);
  
  public infosPerso: IInfosModel = this.languageStore.getInfosTxt();

  constructor(private infosService: InfosService) {}
}
