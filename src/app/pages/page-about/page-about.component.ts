import { Component, computed, Signal } from '@angular/core';
import { IAboutModel } from 'src/app/models/about';
import { AboutService } from 'src/app/services/about.service';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-page-about',
  templateUrl: './page-about.component.html',
  styleUrls: ['./page-about.component.scss'],
})
export class PageAboutComponent {
  private sLanguage = this.uiService.getUiLanguage();
  public sAbout: Signal<IAboutModel> = computed(() => {
    return this.aboutService.getAbout(this.sLanguage());
  });

  constructor(
    private aboutService: AboutService,
    private uiService: UiService
  ) {}
}
