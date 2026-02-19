import { CommonModule } from '@angular/common';
import {
  AfterViewInit,
  Component,
  computed,
  effect,
  ElementRef,
  inject,
  OnDestroy,
  OnInit,
  Signal,
  signal
} from '@angular/core';
import { fromEvent, Observable, Subscription } from 'rxjs';
import { IRecommendationModel } from 'src/app/models/home';
import { HomeStore } from 'src/app/store/home.store';
import { UiStore } from 'src/app/store/ui.store';
import { RecommendationCardComponent } from './recommendation-card/recommendation-card.component';

const modules = [CommonModule];
const components = [RecommendationCardComponent];

@Component({
  selector: 'app-recommendations',
  templateUrl: './recommendations.component.html',
  styleUrls: ['./recommendations.component.scss'],
  imports: [...modules, ...components],
  standalone: true
})
export class RecommendationsComponent implements OnInit, AfterViewInit, OnDestroy {
  readonly host = inject<ElementRef<HTMLElement>>(ElementRef);
  readonly uiStore = inject(UiStore);
  readonly homeStore = inject(HomeStore);

  public uiText = computed(() => this.uiStore.getUiTxt()?.homeTxt);

  public slides: Signal<IRecommendationModel[]> = computed(() =>
    this.homeStore.getHomeTxt()!.lstRecommendations.map((slide, index) => { return { ...slide, id: index } })
  );

  private containerRecoWidth = signal(0);

  /** Width of the slide */
  public slideWidth = computed(() => {
    const nbSlides = this.nbSlidesToShow();
    const containerRecoWidth = this.containerRecoWidth();
    return containerRecoWidth / nbSlides;
  });
  public getSlideWidth = computed(() => {
    return `${this.slideWidth()}px`;
  });

  public carouselWidth = computed(() => this.slideWidth() * this.nbSlidesToShow());

  /** Does the slides change automaticaly */
  private autoSlides = false;
  /** Delay between 2 changes */
  private delay = 3000;

  public currentSlideIndex = 0;
  private nbSlidesToShow = signal(1);
  private resizeObservable$: Observable<Event>;
  private subscription$ = new Subscription();
  private interval: any;

  constructor() {
    this.resizeObservable$ = fromEvent(window, 'resize');
    var subResize = this.resizeObservable$.subscribe(() => {
      this.onResize();
    });
    this.subscription$.add(subResize);

    if (this.autoSlides) {
      this.interval = setInterval(() => {
        this.nextSlide();
      }, this.delay);
    }

    effect(() => {
      const nbSlidesToShow = this.nbSlidesToShow();
      const elem = document.getElementById('carousel-slide-container');
      //check if the number is even
      if (nbSlidesToShow % 2 == 0) {
        elem!.style.left = `${this.slideWidth() / 2}px`;
      } else {
        elem!.style.left = `auto`;
      }
    });
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.onResize();
    });
  }

  ngOnInit() {
    this.onResize();
  }

  ngOnDestroy() {
    this.subscription$.unsubscribe();
    clearInterval(this.interval);
  }

  private onResize() {
    this.containerRecoWidth.set(
      this.host.nativeElement.getBoundingClientRect().width
    );
    this.setNbSlidesToShow();
  }

  private setNbSlidesToShow() {
    this.nbSlidesToShow.set(1);
    // let windowWidth = document.documentElement.clientWidth;
    // if (windowWidth < 900 && this.nbSlidesToShow() != 1) {
    //   this.nbSlidesToShow.set(1);
    // } else if (900 < windowWidth && this.nbSlidesToShow() != 2) {
    //   this.nbSlidesToShow.set(2);
    // }
    // else if (1300 < windowWidth && this.nbSlidesToShow() != 3) {
    //   this.nbSlidesToShow.set(3);
    //   this.recenterCarousel(this.nbSlidesToShow());
    // }
  }

  public previousSlide(): void {
    if (this.currentSlideIndex > 0) {
      this.currentSlideIndex--;
    }
  }

  public nextSlide(): void {
    if (this.currentSlideIndex < this.slides().length - 1) {
      this.currentSlideIndex++;
    }
  }

  public getTransform(): string {
    const translateX = -this.currentSlideIndex * this.carouselWidth();
    return `translateX(${translateX}px)`;
  }

  public isVisibleSlide(): boolean {
    return true;
  }

  public onNavClick(index: number): void {
    this.currentSlideIndex = index;
  }
}
