import { Component, computed, Signal } from '@angular/core';
import { IExperienceModel } from 'src/app/models/experience';
import { IUiTxtAboutModel } from 'src/app/models/uiTxt';
import { AboutService } from 'src/app/services/about.service';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.scss'],
})
export class WorkExperienceComponent {
  private sLanguage = this.uiService.getUiLanguage();
  public sUiText: Signal<IUiTxtAboutModel> = computed(() => {
    return this.uiService.getUiTxt(this.sLanguage())?.aboutTxt;
  });
  public sExpericesPro: Signal<IExperienceModel[]> = computed(() => {
    return this.aboutService.getAbout(this.sLanguage())?.experiencesPro || [];
  });

  constructor(
    private aboutService: AboutService,
    private uiService: UiService
  ) {}
}
