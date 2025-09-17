import { Component, computed, Signal } from '@angular/core';
import { IExperienceModel } from 'src/app/models/about';
import { IUiTxtAboutModel } from 'src/app/models/uiTxt';
import { AboutService } from 'src/app/services/about.service';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss'],
})
export class EducationComponent {
  private sLanguage = this.uiService.getUiLanguage();
  public sUiText: Signal<IUiTxtAboutModel> = computed(() => {
    return this.uiService.getUiTxt()()?.aboutTxt;
  });
  public sEducations: Signal<IExperienceModel[]> = computed(() => {
    return this.aboutService.getAbout()().educations || [];
  });

  constructor(
    private aboutService: AboutService,
    private uiService: UiService
  ) { }
}
