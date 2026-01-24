import {
  Component,
  computed,
  inject,
  OnInit,
  signal,
  Signal,
  WritableSignal,
} from '@angular/core';
import _ from 'lodash';
import { IExperienceModel } from 'src/app/models/about';
import { TypeExperienceEnum } from 'src/app/models/enum';
import { LanguageStore } from 'src/app/store/language.store';
import { listFadeFadeAnimation } from './animation';

@Component({
  selector: 'app-life-timeline',
  templateUrl: './life-timeline.component.html',
  styleUrls: ['./life-timeline.component.scss'],
  animations: [listFadeFadeAnimation],
  standalone: false
})
export class LifeTimelineComponent implements OnInit {
  readonly languageStore = inject(LanguageStore);
  public uiText = this.languageStore.getUiTxt().aboutTxt;

  public typeExpeEduc = TypeExperienceEnum.Education;
  public typeExpeArchi = TypeExperienceEnum.Archievement;
  public typeExpeExpePro = TypeExperienceEnum.ExperiencePro;

  public sTimelineEvents: IExperienceModel[] =
    this.languageStore.getLifeTimeline();

  public sFilterActif: WritableSignal<TypeExperienceEnum | undefined> =
    signal(undefined);

  public sTimelineEventsFiltered: Signal<IExperienceModel[]> = computed(() => {
    const filter = this.sFilterActif();
    let timelineEvents = this.sTimelineEvents;
    if (filter != undefined) {
      return _.filter(timelineEvents, {
        typeExpe: filter,
      });
    }
    return timelineEvents;
  });

  public timelineEventsFilteredTotal = computed(
    () => this.sTimelineEventsFiltered().length
  );

  constructor() { }

  ngOnInit() { }

  isActif(filter?: TypeExperienceEnum): boolean {
    return this.sFilterActif() == filter;
  }

  filterTimelineEvents(filter?: TypeExperienceEnum): void {
    console.log(filter);
    if (filter != undefined) {
      // On set le filtre actif pour la navigation
      this.sFilterActif.set(filter);
    } else {
      this.sFilterActif.set(undefined);
    }
  }
}
