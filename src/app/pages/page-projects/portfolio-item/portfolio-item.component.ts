
import { afterNextRender, Component, ElementRef, HostBinding, Input, output, Renderer2, ViewChild } from '@angular/core';
import { IProjectModel } from 'src/app/models/project';

@Component({
  selector: 'app-portfolio-item',
  templateUrl: './portfolio-item.component.html',
  styleUrls: ['./portfolio-item.component.scss'],
  imports: [],
  standalone: true
})
export class PortfolioItemComponent {
  @HostBinding('class') class = 'portfolio-item-component';
  @Input() project: IProjectModel | undefined;
  readonly openCarouselEvent = output<IProjectModel | undefined>();

  @ViewChild('portfolioItemContent') portfolioItemContent?: ElementRef<HTMLDivElement>;

  constructor(
    private renderer: Renderer2
  ) {
    // Use afterNextRender for zoneless change detection compatibility
    afterNextRender(() => {
      this.setupMediaQueryLogic();
    });
  }

  private setupMediaQueryLogic(): void {
    const mediaQuery = window.matchMedia('(min-width: 1445px)');

    if (mediaQuery.matches) {
      this.calculateTransformY();
    } else {
      this.renderer.setStyle(this.portfolioItemContent?.nativeElement, 'transform', `translateY(0px)`);
    }

    // Optional: re-run if the user resizes the window
    mediaQuery.addEventListener('change', (event) => {
      if (event.matches) {
        this.calculateTransformY();
      }
      else {
        this.renderer.setStyle(this.portfolioItemContent?.nativeElement, 'transform', `translateY(0px)`);
      }
    });
  }

  private calculateTransformY(): void {
    const elementHeight = this.portfolioItemContent?.nativeElement?.getBoundingClientRect()?.height;
    if (elementHeight) {
      const translateY = Number(elementHeight);
      // Manipulate via Renderer2
      this.renderer.setStyle(this.portfolioItemContent?.nativeElement, 'transform', `translateY(${translateY}px)`);
    }
  }

  public onItemClicked(): void {
    this.openCarouselEvent.emit(this.project);
  }
}