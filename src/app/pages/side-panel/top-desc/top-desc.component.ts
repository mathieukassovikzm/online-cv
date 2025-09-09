import { Component, computed, OnInit, Signal } from '@angular/core';
import { CodeLanguageEnum } from 'src/app/models/enum';
import { IInfosModel } from 'src/app/models/infos';
import { IUiTxtModel } from 'src/app/models/uiTxt';
import { InfosService } from 'src/app/services/infos.service';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-top-desc',
  templateUrl: './top-desc.component.html',
  styleUrls: ['./top-desc.component.scss'],
})
export class TopDescComponent implements OnInit {
  public sUiText: Signal<IUiTxtModel> = this.uiService.getUiTxt();
  public sInfos: Signal<IInfosModel> = this.infosService.getInfos();

  constructor(
    private infosService: InfosService,
    private uiService: UiService
  ) {}

  ngOnInit(): void {
  }

  switchToFrench(): void {
    this.uiService.setUiLanguageAndNavigate(CodeLanguageEnum.FR);
  }

  switchToEnglish(): void {
    this.uiService.setUiLanguageAndNavigate(CodeLanguageEnum.EN);
  }

  switchToSpanish(): void {
    this.uiService.setUiLanguageAndNavigate(CodeLanguageEnum.ES);
  }
}
