import { Component, computed, inject, Signal, signal } from '@angular/core';
import { PortfolioStore } from 'src/app/store/portfolio.store';
import { UiStore } from 'src/app/store/ui.store';
import { PortfolioItemComponent } from 'src/app/pages/page-projects/portfolio-item/portfolio-item.component';
import { PortfolioCarouselComponent } from 'src/app/shared/components/portfolio-carousel/portfolio-carousel.component';
import { IProjectModel } from 'src/app/models/project';

@Component({
  selector: 'app-page-projects',
  templateUrl: './page-projects.component.html',
  styleUrls: ['./page-projects.component.scss'],
  imports: [PortfolioItemComponent, PortfolioCarouselComponent],
  standalone: true
})
export class PageProjectsComponent {
  readonly uiStore = inject(UiStore);
  readonly portfolioStore = inject(PortfolioStore);

  public uiText = computed(() => this.uiStore.getUiTxt());
  public lstPortfolio = computed(() => this.portfolioStore.getPortfolio());
  public isCarouselVisible = signal(false);
  public currentItemOpen = signal<IProjectModel | undefined>(undefined);

  constructor() { }

  openCarousel(item: IProjectModel | undefined): void {
    this.isCarouselVisible.set(true);
    this.currentItemOpen.set(item);
  }

  closeCarousel(): void {
    this.isCarouselVisible.set(false);
  }
}
