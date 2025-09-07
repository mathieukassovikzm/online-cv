import { Component, computed, HostBinding, Input, Signal } from '@angular/core';
import { TypeExperienceEnum } from 'src/app/models/enum';
import { IExperienceModel } from 'src/app/models/experience';
import { IUiTxtCardModel } from 'src/app/models/uiTxt';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-life-experience',
  templateUrl: './life-experience.component.html',
  styleUrls: ['./life-experience.component.scss'],
})
export class LifeExperienceComponent {
  @HostBinding('class') class = 'life-experience-component';
  @Input() item: IExperienceModel | undefined;

  public sUiText: Signal<IUiTxtCardModel> = computed(() => {
    return this.uiService.getUiTxt()()?.cardTxt;
  });

  public typeExpeEduc = TypeExperienceEnum.Education;
  public typeExpeArchi = TypeExperienceEnum.Archievement;
  public typeExpeExpePro = TypeExperienceEnum.ExperiencePro;

  constructor(private uiService: UiService) {}
}
