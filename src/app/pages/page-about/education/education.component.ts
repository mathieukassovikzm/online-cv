import { Component, OnInit } from '@angular/core';
import { IExperienceModel } from 'src/app/models/experience';
import { IUiTxtAboutModel } from 'src/app/models/uiTxt';
import { AboutService } from 'src/app/services/about.service';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss'],
})
export class EducationComponent implements OnInit {
  public educations?: IExperienceModel[] = [];
  public txt?: IUiTxtAboutModel;
  constructor(
    private aboutService: AboutService,
    private uiService: UiService
  ) {}

  ngOnInit() {
    this.educations = this.aboutService.getAbout().educations;
    this.txt = this.uiService.getUiTxtAbout();
  }
}
