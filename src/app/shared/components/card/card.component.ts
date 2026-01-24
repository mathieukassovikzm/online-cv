import {
  Component,
  computed,
  HostBinding,
  inject,
  Input,
  Signal
} from '@angular/core';
import { IExperienceModel } from 'src/app/models/about';
import { TypeExperienceEnum } from 'src/app/models/enum';
import { IUiTxtCardModel } from 'src/app/models/uiTxt';
import { LanguageStore } from 'src/app/store/language.store';
import { UiStore } from 'src/app/store/ui.store';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  standalone: false
})
export class CardComponent {
  @HostBinding('class') class = 'card-component';
  @Input() item: IExperienceModel | undefined;

  readonly languageStore = inject(LanguageStore);

  public typeExpeEduc = TypeExperienceEnum.Education;
  public typeExpeArchi = TypeExperienceEnum.Archievement;
  public typeExpeExpePro = TypeExperienceEnum.ExperiencePro;

  constructor() { }
}
