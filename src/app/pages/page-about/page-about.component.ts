import { Component, OnInit } from '@angular/core';
import { IAboutModel } from 'src/app/models/about';
import { AboutService } from 'src/app/services/about.service';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-page-about',
  templateUrl: './page-about.component.html',
  styleUrls: ['./page-about.component.scss'],
})
export class PageAboutComponent implements OnInit {
  public about: IAboutModel = {};
  constructor(private aboutService: AboutService) {}
  ngOnInit(): void {
    this.about = this.aboutService.getAbout();
  }
}
