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
import { IExperienceModel } from 'src/app/models/about';
import { TypeExperienceEnum } from 'src/app/models/enum';
import { LifeExperienceComponent } from 'src/app/shared/components/life-experience/life-experience.component';
import { AboutStore } from 'src/app/store/about.store';
import { UiStore } from 'src/app/store/ui.store';

const modules = [CommonModule];
const components = [LifeExperienceComponent];

@Component({
  selector: 'app-life-timeline',
  templateUrl: './life-timeline.component.html',
  styleUrls: ['./life-timeline.component.scss'],
  imports: [...modules, ...components],
  standalone: true
})
export class LifeTimelineComponent implements OnInit {
  readonly aboutStore = inject(AboutStore);
  readonly uiStore = inject(UiStore);

  public uiText = computed(() => this.uiStore.getUiTxt().aboutTxt);

  public typeExpeEduc = TypeExperienceEnum.Education;
  public typeExpeArchi = TypeExperienceEnum.Archievement;
  public typeExpeExpePro = TypeExperienceEnum.ExperiencePro;

  public sTimelineEvents = computed(() => this.aboutStore.getLifeTimeline());

  public sFilterActif: WritableSignal<TypeExperienceEnum | undefined> =
    signal(undefined);

  // Animation state to control CSS transitions
  public isAnimating = signal(false);

  public sTimelineEventsFiltered: Signal<IExperienceModel[]> = computed(() => {
    const filter = this.sFilterActif();
    let timelineEvents = this.sTimelineEvents;
    if (filter != undefined) {
      return timelineEvents().filter(event => event.typeExpe === filter);
    }
    return timelineEvents();
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
    // Start fade out animation
    this.isAnimating.set(true);
    
    // Wait for fade out, then update filter and fade in
    setTimeout(() => {
      if (filter != undefined) {
        this.sFilterActif.set(filter);
      } else {
        this.sFilterActif.set(undefined);
      }
      
      // Reset animation state to trigger fade in
      setTimeout(() => {
        this.isAnimating.set(false);
      }, 50);
    }, 300);
  }
}
