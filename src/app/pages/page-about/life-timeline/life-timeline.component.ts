import {
  Component,
  computed,
  OnInit,
  signal,
  Signal,
  WritableSignal,
} from '@angular/core';
import _ from 'lodash';
import { IExperienceModel } from 'src/app/models/about';
import { TypeExperienceEnum } from 'src/app/models/enum';
import { IUiTxtAboutModel } from 'src/app/models/uiTxt';
import { AboutService } from 'src/app/services/about.service';
import { UiService } from 'src/app/services/ui.service';
import { listFadeFadeAnimation } from './animation';

@Component({
    selector: 'app-life-timeline',
    templateUrl: './life-timeline.component.html',
    styleUrls: ['./life-timeline.component.scss'],
    animations: [listFadeFadeAnimation],
    standalone: false
})
export class LifeTimelineComponent implements OnInit {
  public typeExpeEduc = TypeExperienceEnum.Education;
  public typeExpeArchi = TypeExperienceEnum.Archievement;
  public typeExpeExpePro = TypeExperienceEnum.ExperiencePro;

  public sUiText: Signal<IUiTxtAboutModel> = computed(() => {
    return this.uiService.getUiTxt()()?.aboutTxt;
  });
  public sTimelineEvents: Signal<IExperienceModel[]> =
    this.aboutService.getLifeTimeline();

  public sFilterActif: WritableSignal<TypeExperienceEnum | undefined> =
    signal(undefined);

  public sTimelineEventsFiltered: Signal<IExperienceModel[]> = computed(() => {
    const filter = this.sFilterActif();
    let timelineEvents = this.sTimelineEvents();
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

  constructor(
    private aboutService: AboutService,
    private uiService: UiService
  ) { }

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
