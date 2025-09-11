import { AnimationEvent } from '@angular/animations';
import {
  AfterViewInit,
  Component,
  computed,
  effect,
  ElementRef,
  OnDestroy,
  OnInit,
  signal,
  Signal,
} from '@angular/core';
import { fromEvent, Observable, Subscription } from 'rxjs';
import { IRecommendationModel } from 'src/app/models/home';
import { HomeService } from 'src/app/services/home.service';
import { animationMultipleCarousel } from 'src/app/shared/class/animation';

@Component({
  selector: 'app-recommendations',
  templateUrl: './recommendations.component.html',
  styleUrls: ['./recommendations.component.scss'],
  animations: [animationMultipleCarousel],
})
export class RecommendationsComponent
  implements OnInit, AfterViewInit, OnDestroy
{
  public sSlides: Signal<IRecommendationModel[]> = computed(
    () => this.homeService.getHome()()?.lstRecommendations
  );
  public evolutingLstSlide: IRecommendationModel[] = [];

  private containerRecoWidth = signal(0);

  /** Width of the slide */
  public slideWidth = computed(() => {
    const nbSlides = this.nbSlidesToShow();
    const containerRecoWidth = this.containerRecoWidth();
    console.log(`containerRecoWidth : ${containerRecoWidth}`);
    console.log(`nbSlides : ${nbSlides}`);
    console.log(`slideWidth : ${containerRecoWidth / nbSlides}`);
    return containerRecoWidth / nbSlides;
  });
  public getSlideWidth = computed(() => {
    return `${this.slideWidth()}px`;
  });

  /** Margin left and right of the slide */
  private slideMarginLr = computed(() => {
    const nbSlides = this.nbSlidesToShow();
    if (nbSlides === 1) {
      return 50;
    } else {
      return 0;
    }
  });
  public getSlideMarginLr = computed(() => {
    return `${this.slideMarginLr}px`;
  });

  public carouselWidth = computed(() => {
    return (
      (this.slideWidth() + 2 * this.slideMarginLr()) * this.nbSlidesToShow()
    );
  });
  public getCarouselWidth = computed(() => {
    return `${this.carouselWidth()}px`;
  });

  /** Does the slides change automaticaly */
  private autoSlides = false;
  /** Delay between 2 changes */
  private delay = 5000;

  public currentSlide = 0;
  private nbSlidesToShow = signal(1);
  private resizeObservable$: Observable<Event>;
  private subscription$: Subscription = new Subscription();
  private interval: any;

  constructor(
    private homeService: HomeService,
    private host: ElementRef<HTMLElement>
  ) {
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
        elem!.style.left = `${this.carouselWidth() / 2}px`;
        console.log(`left : ${elem!.style.left}`);
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
    this.evolutingLstSlide = this.sSlides();
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
    let windowWidth = document.documentElement.clientWidth;
    if (windowWidth < 900 && this.nbSlidesToShow() != 1) {
      this.nbSlidesToShow.set(1);
    } else if (900 < windowWidth && this.nbSlidesToShow() != 2) {
      this.nbSlidesToShow.set(2);
    }
    // else if (1300 < windowWidth && this.nbSlidesToShow() != 3) {
    //   this.nbSlidesToShow.set(3);
    //   this.recenterCarousel(this.nbSlidesToShow());
    // }
  }

  public previousSlide(): void {
    this.currentSlide--;
  }
  public nextSlide(): void {
    this.currentSlide++;
  }

  public isVisibleSlide(): boolean {
    return true;
  }

  public onAnimationDoneEvent(event: AnimationEvent) {
    // ici on incrément
    if (event.fromState < event.toState) {
      // on récupére l'élément qui disparait
      var elt = this.evolutingLstSlide[0];
      // on pop l'élément du tableau car il a disparu
      this.evolutingLstSlide.shift();
      // on le rajoute a la fin
      this.evolutingLstSlide.push(elt!);
    }
    // ici on décrément
    else if (event.fromState > event.toState) {
      // on récupére l'élément qui disparait
      var elt = this.evolutingLstSlide[this.evolutingLstSlide.length - 1];
      // on pop l'élément du tableau car il a disparu
      this.evolutingLstSlide.pop();
      // on le rajoute a la fin
      this.evolutingLstSlide.unshift(elt!);
    }
  }

  public onNavClick(index: number): void {
    this.currentSlide = index;
  }
}
