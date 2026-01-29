import { CommonModule } from '@angular/common';
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
import { LifeExperienceComponent } from 'src/app/shared/components/life-experience/life-experience.component';
import { AboutStore } from 'src/app/store/about.store';
import { UiStore } from 'src/app/store/ui.store';
import { listFadeFadeAnimation } from './animation';

const modules = [CommonModule];
const components = [LifeExperienceComponent];

@Component({
  selector: 'app-life-timeline',
  templateUrl: './life-timeline.component.html',
  styleUrls: ['./life-timeline.component.scss'],
  animations: [listFadeFadeAnimation],
  imports: [...modules, ...components],
  standalone: true
})
export class LifeTimelineComponent implements OnInit {
  readonly aboutStore = inject(AboutStore);
  readonly uiStore = inject(UiStore);

  public uiText = this.uiStore.getUiTxt().aboutTxt;

  public typeExpeEduc = TypeExperienceEnum.Education;
  public typeExpeArchi = TypeExperienceEnum.Archievement;
  public typeExpeExpePro = TypeExperienceEnum.ExperiencePro;

  public sTimelineEvents: IExperienceModel[] =
    this.aboutStore.getLifeTimeline();

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
    if (filter != undefined) {
      // On set le filtre actif pour la navigation
      this.sFilterActif.set(filter);
    } else {
      this.sFilterActif.set(undefined);
    }
  }
}
