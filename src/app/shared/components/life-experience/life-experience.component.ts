import { Component, HostBinding, inject, Input } from '@angular/core';
import { IExperienceModel } from 'src/app/models/about';
import { TypeExperienceEnum } from 'src/app/models/enum';
import { LanguageStore } from 'src/app/store/language.store';

@Component({
  selector: 'app-life-experience',
  templateUrl: './life-experience.component.html',
  styleUrls: ['./life-experience.component.scss'],
  standalone: false
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
