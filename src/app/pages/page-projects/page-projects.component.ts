import { Component, computed, inject, signal } from '@angular/core';
import { TypeProjectEnum } from 'src/app/models/enum';
import { IProjectModel } from 'src/app/models/project';
import { PortfolioItemComponent } from 'src/app/pages/page-projects/portfolio-item/portfolio-item.component';
import { PortfolioCarouselComponent } from 'src/app/shared/components/portfolio-carousel/portfolio-carousel.component';
import { PortfolioStore } from 'src/app/store/portfolio.store';
import { UiStore } from 'src/app/store/ui.store';

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
  public sFilterActif = signal<TypeProjectEnum | undefined>(undefined);
  public lstPortfolio = computed(() => this.portfolioStore.getPortfolio());
  public lstPortfolioFiltered = computed(() => {
    const filter = this.sFilterActif();
    const lstPortfolio = this.lstPortfolio();
    if (filter != undefined) {
      return lstPortfolio.filter(project => project.type === filter);
    }
    return lstPortfolio;
  });
  public isCarouselVisible = signal(false);
  public currentItemOpen = signal<IProjectModel | undefined>(undefined);

  public typeLogo = TypeProjectEnum.Logo;
  public typeWebsite = TypeProjectEnum.Website;
  public typeVideos = TypeProjectEnum.Videos;
  public typeFairePart = TypeProjectEnum.FairePart;

  constructor() { }

  public openCarousel(item: IProjectModel | undefined): void {
    this.isCarouselVisible.set(true);
    this.currentItemOpen.set(item);
  }

  public closeCarousel(): void {
    this.isCarouselVisible.set(false);
  }

  public isActif(filter?: TypeProjectEnum): boolean {
    return this.sFilterActif() == filter;
  }

  public setFilter(currentFilter?: TypeProjectEnum): void {
    this.sFilterActif.set(currentFilter);
  }
}
