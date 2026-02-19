import { Component, ElementRef, input, inject, AfterViewInit, ViewChild, signal, effect, OnDestroy } from '@angular/core';
import { Observable, Subscription, fromEvent } from 'rxjs';
import { IRecommendationModel } from 'src/app/models/home';


@Component({
  selector: 'app-recommendation-card',
  templateUrl: './recommendation-card.component.html',
  styleUrls: ['./recommendation-card.component.scss'],
  imports: [],
  standalone: true
})
export class RecommendationCardComponent implements AfterViewInit, OnDestroy {
  @ViewChild('textEllipsis', { static: false }) textEllipsis?: ElementRef<HTMLParagraphElement>;
  @ViewChild('textFull', { static: false }) textFull?: ElementRef<HTMLParagraphElement>;

  readonly person = input<IRecommendationModel>(<IRecommendationModel>{});
  /** Width of the card */
  readonly width = input<string>('');
  readonly isDisplayed = input<boolean>(false);

  public isTextTruncated = signal(true);
  public txtFullHeight = signal(0);

  private resizeObservable$: Observable<Event>;
  private subscription$ = new Subscription();

  constructor() {
    effect(() => {
      const isDisplayed = this.isDisplayed();
      if (isDisplayed) {
        this.setIsTextTruncated();
      }
    });

    effect(() => {
      const isTextTruncated = this.isTextTruncated();
      const isDisplayed = this.isDisplayed();
      const txtFullHeight = this.txtFullHeight();
      const textEllipsisElement = this.textEllipsis?.nativeElement;

      if (!isDisplayed && textEllipsisElement) {
        textEllipsisElement.style.height = `auto`;
        return;
      }
      if (!isTextTruncated && textEllipsisElement) {
        textEllipsisElement.style.height = `${txtFullHeight}px`;
      }
      else if (textEllipsisElement) {
        textEllipsisElement.style.height = `auto`;
      }
    });

    this.resizeObservable$ = fromEvent(window, 'resize');
    var subResize = this.resizeObservable$.subscribe(() => {
      this.setIsTextTruncated();
    });
    this.subscription$.add(subResize);
  }

  ngAfterViewInit(): void {
    this.setIsTextTruncated();
  }

  ngOnDestroy() {
    this.subscription$.unsubscribe();
  }

  public getPhoto(): string {
    return this.person().photo ?? './assets/recommendations/avatar.webp';
  }

  /**
   * Checks if the text is truncated (has ellipsis)
   * @returns True if text is truncated
   */
  private setIsTextTruncated(): void {
    if (this.isDisplayed() && this.person().text) {

      if (!this.textEllipsis?.nativeElement || !this.textFull?.nativeElement) {
        this.isTextTruncated.set(false);
        return;
      }

      const textEllipsisElement = this.textEllipsis.nativeElement;
      const textFullElement = this.textFull.nativeElement;

      const heightTextEllipsis = textEllipsisElement.getBoundingClientRect().height;
      const heightTextFull = textFullElement.getBoundingClientRect().height;

      this.txtFullHeight.set(heightTextFull);
      this.isTextTruncated.set(heightTextEllipsis < heightTextFull);
    }
  }

  public toggleTextTruncation(): void {
    this.isTextTruncated.set(!this.isTextTruncated());
  }
}
