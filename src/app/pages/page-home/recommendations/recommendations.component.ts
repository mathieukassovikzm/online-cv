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
import { IUiTxtHomeModel } from 'src/app/models/uiTxt';
import { HomeService } from 'src/app/services/home.service';
import { UiService } from 'src/app/services/ui.service';
import { animationMultipleCarousel } from 'src/app/shared/class/animation-carousel';

@Component({
    selector: 'app-recommendations',
    templateUrl: './recommendations.component.html',
    styleUrls: ['./recommendations.component.scss'],
    animations: [animationMultipleCarousel],
    standalone: false
})
export class RecommendationsComponent
  implements OnInit, AfterViewInit, OnDestroy {
  public sUiText: Signal<IUiTxtHomeModel> = computed(() => {
    return this.uiService.getUiTxt()()?.homeTxt;
  });
  public sSlides: Signal<IRecommendationModel[]> = computed(() => {
    let slides = this.homeService.getHome()()?.lstRecommendations;
    slides = slides.map((slide, index) => { return { ...slide, id: index } })
    return slides;
  });
  public evolutingLstSlide: IRecommendationModel[] = [];

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
  public signedSlideWidth = 0; // <- new

  public carouselWidth = computed(() => this.slideWidth() * this.nbSlidesToShow());

  /** Does the slides change automaticaly */
  private autoSlides = false;
  /** Delay between 2 changes */
  private delay = 3000;

  public currentSlide = 0;
  public navIndex = 0;     // drives active nav dot
  private nbSlidesToShow = signal(1);
  private resizeObservable$: Observable<Event>;
  private subscription$ = new Subscription();
  private interval: any;

  constructor(
    private homeService: HomeService,
    private host: ElementRef<HTMLElement>,
    private uiService: UiService

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

    // // on récupère le dernier élément du tableau car il a disparu
    // const last = this.sSlides().slice(-1).pop();
    // // on le rajoute au début
    this.evolutingLstSlide = this.sSlides();
    // this.evolutingLstSlide.unshift(last!);
    // console.log(this.evolutingLstSlide)
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
    this.signedSlideWidth = this.carouselWidth(); // positif -> container moves right
    this.navIndex = (this.currentSlide - 1 + this.sSlides().length) % this.sSlides().length;
    this.currentSlide--;
  }

  public nextSlide(): void {
    this.signedSlideWidth = this.carouselWidth() * -1; // negative -> container moves left
    this.navIndex = (this.currentSlide + 1) % this.sSlides().length;
    this.currentSlide++;
  }

  public isVisibleSlide(): boolean {
    return true;
  }

  public onAnimationDoneEvent(event: AnimationEvent) {
    // ici on incrément
    if (event.fromState < event.toState) {
      // on pop l'élément du tableau car il a disparu
      const first = this.evolutingLstSlide.shift();
      // on le rajoute a la fin
      this.evolutingLstSlide.push(first!);
    }
    // ici on décrément
    else if (event.fromState > event.toState) {
      // on pop l'élément du tableau car il a disparu
      const last = this.evolutingLstSlide.pop();
      // on le rajoute au début
      this.evolutingLstSlide.unshift(last!);
    }
  }

  public onNavClick(index: number): void {
    this.currentSlide = index;
    this.navIndex = this.sSlides().findIndex(s => s.id === index);
  }
}
