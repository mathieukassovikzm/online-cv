import { Component, computed, Signal } from '@angular/core';
import { IUiTxtAboutModel } from 'src/app/models/uiTxt';
import { AboutService } from 'src/app/services/about.service';
import { UiService } from 'src/app/services/ui.service';

@Component({
    selector: 'app-extract',
    templateUrl: './extract.component.html',
    styleUrls: ['./extract.component.scss'],
    standalone: false
})
export class ExtractComponent {
  public sUiText: Signal<IUiTxtAboutModel> = computed(() => {
    return this.uiService.getUiTxt()()?.aboutTxt;
  });
  public sExtract: Signal<string | undefined> = computed(() => {
    return this.aboutService.getAbout()().extract;
  });

  constructor(
    private aboutService: AboutService,
    private uiService: UiService
  ) {}
}
