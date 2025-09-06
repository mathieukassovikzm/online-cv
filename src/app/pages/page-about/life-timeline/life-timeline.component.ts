import { Component, computed, OnInit, Signal } from '@angular/core';
import _ from 'lodash';
import { TypeExperienceEnum } from 'src/app/models/enum';
import { IExperienceModel } from 'src/app/models/experience';
import { IUiTxtAboutModel } from 'src/app/models/uiTxt';
import { AboutService } from 'src/app/services/about.service';
import { UiService } from 'src/app/services/ui.service';
import { listFadeFadeAnimation } from './animation';

@Component({
  selector: 'app-life-timeline',
  templateUrl: './life-timeline.component.html',
  styleUrls: ['./life-timeline.component.scss'],
  animations: [listFadeFadeAnimation],
})
export class LifeTimelineComponent implements OnInit {
  public timelineEventsFiltered?: IExperienceModel[] = [];
  public timelineEventsFilteredTotal = -1;
  public filterActif: TypeExperienceEnum | undefined;

  public typeExpeEduc = TypeExperienceEnum.Education;
  public typeExpeArchi = TypeExperienceEnum.Archievement;
  public typeExpeExpePro = TypeExperienceEnum.ExperiencePro;

  private sLanguage = this.uiService.getUiLanguage();
  public sUiText: Signal<IUiTxtAboutModel> = computed(() => {
    return this.uiService.getUiTxt(this.sLanguage())?.aboutTxt;
  });
  public sTimelineEvents: Signal<IExperienceModel[]> = computed(() => {
    return this.aboutService.getLifeTimeline(this.sLanguage());
  });

  constructor(
    private aboutService: AboutService,
    private uiService: UiService
  ) {}

  ngOnInit() {
    this.timelineEventsFiltered = this.sTimelineEvents();
    this.timelineEventsFilteredTotal = this.timelineEventsFiltered.length;
  }

  isActif(filter?: TypeExperienceEnum): boolean {
    return this.filterActif == filter;
  }

  filterTimelineEvents(filter?: TypeExperienceEnum): void {
    if (filter != undefined) {
      this.timelineEventsFiltered = _.filter(this.sTimelineEvents(), {
        typeExpe: filter,
      });

      // On set le filtre actif pour la navigation
      this.filterActif = filter;

      // On set le nouveau total pour l'animation
      const newTotal = this.timelineEventsFiltered.length;
      if (this.timelineEventsFilteredTotal !== newTotal) {
        this.timelineEventsFilteredTotal = newTotal;
      }
    } else {
      this.timelineEventsFiltered = this.sTimelineEvents();
      this.timelineEventsFilteredTotal = this.sTimelineEvents().length;
      this.filterActif = undefined;
    }
  }
}
