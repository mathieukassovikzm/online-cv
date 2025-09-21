import { Component, Signal } from '@angular/core';
import { IAboutModel } from 'src/app/models/about';
import { AboutService } from 'src/app/services/about.service';

@Component({
  selector: 'app-page-projects',
  templateUrl: './page-projects.component.html',
  styleUrls: ['./page-projects.component.scss'],
})
export class PageProjectsComponent {
  public sAbout: Signal<IAboutModel> = this.aboutService.getAbout();

  constructor(private aboutService: AboutService) {}
}
