import {
  Component,
  computed,
  HostBinding,
  Input,
  Signal
} from '@angular/core';
import { IExperienceModel } from 'src/app/models/about';
import { TypeExperienceEnum } from 'src/app/models/enum';
import { IUiTxtCardModel } from 'src/app/models/uiTxt';
import { UiService } from 'src/app/services/ui.service';

@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.scss'],
    standalone: false
})
export class CardComponent {
  @HostBinding('class') class = 'card-component';
  @Input() item: IExperienceModel | undefined;

  public sUiText: Signal<IUiTxtCardModel> = computed(() => {
    return this.uiService.getUiTxt()()?.cardTxt;
  });

  public typeExpeEduc = TypeExperienceEnum.Education;
  public typeExpeArchi = TypeExperienceEnum.Archievement;
  public typeExpeExpePro = TypeExperienceEnum.ExperiencePro;

  constructor(private uiService: UiService) {}
}
