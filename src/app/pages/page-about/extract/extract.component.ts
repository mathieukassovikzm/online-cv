import { Component, OnInit } from '@angular/core';
import { IUiTxtAboutModel } from 'src/app/models/uiTxt';
import { AboutService } from 'src/app/services/about.service';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-extract',
  templateUrl: './extract.component.html',
  styleUrls: ['./extract.component.scss'],
})
export class ExtractComponent implements OnInit {
  public extract? = '';
  public txt?: IUiTxtAboutModel;
  constructor(
    private aboutService: AboutService,
    private uiService: UiService
  ) {}

  ngOnInit() {
    this.extract = this.aboutService.getAbout().extract;
    this.txt = this.uiService.getUiTxt().aboutTxt;
  }
}
