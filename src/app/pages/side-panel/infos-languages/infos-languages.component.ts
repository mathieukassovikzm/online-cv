import { Component, computed, OnInit, Signal, signal } from '@angular/core';
import { CodeLanguageEnum } from 'src/app/models/enum';
import { ILanguageModel } from 'src/app/models/infos';
import { InfosService } from 'src/app/services/infos.service';
import { UiService } from 'src/app/services/ui.service';

@Component({
    selector: 'app-infos-languages',
    templateUrl: './infos-languages.component.html',
    styleUrls: ['./infos-languages.component.scss'],
    standalone: false
})
export class InfosLanguagesComponent {
  public sLstLanguages: Signal<ILanguageModel[]> = computed(()=>{
    return this.infosService.getLanguages()()
  });
  public codeFr = CodeLanguageEnum.FR;
  public codeEn = CodeLanguageEnum.EN;
  public codeEs = CodeLanguageEnum.ES;

  constructor(
    private uiService: UiService,
    private infosService: InfosService
  ) {}
}
