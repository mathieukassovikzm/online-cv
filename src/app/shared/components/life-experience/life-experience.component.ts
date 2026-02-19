import { CommonModule } from '@angular/common';
import { Component, HostBinding, inject, input } from '@angular/core';
import { IExperienceModel } from 'src/app/models/about';
import { TypeExperienceEnum } from 'src/app/models/enum';
import { UiStore } from 'src/app/store/ui.store';
import { SvgEducationComponent } from '../../svgs/ui/svg-education/svg-education.component';
import { SvgMedalComponent } from '../../svgs/ui/svg-medal/svg-medal.component';
import { SvgWorkComponent } from '../../svgs/ui/svg-work/svg-work.component';

const modules = [CommonModule];
const svgs = [SvgMedalComponent, SvgWorkComponent, SvgEducationComponent];

@Component({
  selector: 'app-life-experience',
  templateUrl: './life-experience.component.html',
  styleUrls: ['./life-experience.component.scss'],
  imports: [...modules, ...svgs],
  standalone: true
})
export class LifeExperienceComponent {
  @HostBinding('class') class = 'life-experience-component';
  readonly item = input<IExperienceModel>();

  readonly uiStore = inject(UiStore);

  public uiText = this.uiStore.getUiTxt();

  public typeExpeEduc = TypeExperienceEnum.Education;
  public typeExpeArchi = TypeExperienceEnum.Archievement;
  public typeExpeExpePro = TypeExperienceEnum.ExperiencePro;

  constructor() { }
}
