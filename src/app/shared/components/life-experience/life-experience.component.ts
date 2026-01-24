import { CommonModule } from '@angular/common';
import { Component, HostBinding, inject, Input } from '@angular/core';
import { IExperienceModel } from 'src/app/models/about';
import { TypeExperienceEnum } from 'src/app/models/enum';
import { LanguageStore } from 'src/app/store/language.store';
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
  @Input() item: IExperienceModel | undefined;

  readonly languageStore = inject(LanguageStore);

  public typeExpeEduc = TypeExperienceEnum.Education;
  public typeExpeArchi = TypeExperienceEnum.Archievement;
  public typeExpeExpePro = TypeExperienceEnum.ExperiencePro;

  constructor() { }
}
