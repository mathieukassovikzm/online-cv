import { Component, Signal } from '@angular/core';
import { IAboutModel } from 'src/app/models/about';
import { AboutService } from 'src/app/services/about.service';

@Component({
    selector: 'app-page-about',
    templateUrl: './page-about.component.html',
    styleUrls: ['./page-about.component.scss'],
    standalone: false
})
export class PageAboutComponent {
  public sAbout: Signal<IAboutModel> = this.aboutService.getAbout();

  constructor(private aboutService: AboutService) {}
}
