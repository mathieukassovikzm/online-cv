import { Component, Signal } from '@angular/core';
import { IAboutModel } from 'src/app/models/about';
import { AboutService } from 'src/app/services/about.service';

@Component({
  selector: 'app-page-contacts',
  templateUrl: './page-contacts.component.html',
  styleUrls: ['./page-contacts.component.scss'],
})
export class PageContactsComponent {
  public sAbout: Signal<IAboutModel> = this.aboutService.getAbout();

  constructor(private aboutService: AboutService) {}
}
