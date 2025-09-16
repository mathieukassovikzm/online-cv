import { Component, computed, Signal } from '@angular/core';
import { IHobbyModel } from 'src/app/models/hobby';
import { IUiTxtAboutModel } from 'src/app/models/uiTxt';
import { AboutService } from 'src/app/services/about.service';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-hobbies',
  templateUrl: './hobbies.component.html',
  styleUrls: ['./hobbies.component.scss'],
})
export class HobbiesComponent {
  public sUiText: Signal<IUiTxtAboutModel> = computed(() => {
    return this.uiService.getUiTxt()()?.aboutTxt;
  });
  public sHobbies: Signal<IHobbyModel[]> = computed(() => {
    return this.aboutService.getAbout()().hobbies || [];
  });

  constructor(
    private aboutService: AboutService,
    private uiService: UiService
  ) { }

}
