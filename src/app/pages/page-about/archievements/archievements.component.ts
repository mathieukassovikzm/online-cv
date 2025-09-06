import { Component, computed, OnInit, Signal } from '@angular/core';
import { IExperienceModel } from 'src/app/models/experience';
import { IUiTxtAboutModel } from 'src/app/models/uiTxt';
import { AboutService } from 'src/app/services/about.service';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-archievements',
  templateUrl: './archievements.component.html',
  styleUrls: ['./archievements.component.scss'],
})
export class ArchievementsComponent implements OnInit {
  public archievements?: IExperienceModel[] = [];
  public txt?: IUiTxtAboutModel;

  private sLanguage = this.uiService.getUiLanguage();
  public sUiText: Signal<IUiTxtAboutModel> = computed(() => {
    return this.uiService.getUiTxt(this.sLanguage())?.aboutTxt;
  });

  constructor(
    private aboutService: AboutService,
    private uiService: UiService
  ) {}

  ngOnInit() {
    this.archievements = this.aboutService.getAbout().archievements;
  }
}
