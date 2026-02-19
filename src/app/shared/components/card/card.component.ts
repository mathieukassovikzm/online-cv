
import {
  Component,
  HostBinding,
  inject,
  Input
} from '@angular/core';
import { IExperienceModel } from 'src/app/models/about';
import { TypeExperienceEnum } from 'src/app/models/enum';
import { SvgEducationComponent } from 'src/app/shared/svgs/ui/svg-education/svg-education.component';
import { SvgMedalComponent } from 'src/app/shared/svgs/ui/svg-medal/svg-medal.component';
import { SvgWorkComponent } from 'src/app/shared/svgs/ui/svg-work/svg-work.component';
import { LanguageStore } from 'src/app/store/language.store';
import { UiStore } from 'src/app/store/ui.store';

const svgs = [SvgMedalComponent, SvgWorkComponent, SvgEducationComponent];

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  imports: [...svgs],
  standalone: true
})
export class CardComponent {
  @HostBinding('class') class = 'card-component';
  @Input() item: IExperienceModel | undefined;

  readonly languageStore = inject(LanguageStore);
  readonly uiStore = inject(UiStore);

  public uiText = () => this.uiStore.getUiTxt()?.contactTxt;

  public typeExpeEduc = TypeExperienceEnum.Education;
  public typeExpeArchi = TypeExperienceEnum.Archievement;
  public typeExpeExpePro = TypeExperienceEnum.ExperiencePro;

  constructor() { }
}
