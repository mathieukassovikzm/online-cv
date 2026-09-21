
import { Component, HostBinding, output, input, computed } from '@angular/core';
import { TypeProjectEnum } from 'src/app/models/enum';
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
  readonly project = input<IProjectModel>();
  readonly openCarouselEvent = output<IProjectModel | undefined>();

  readonly isLogo = computed(() => this.project()?.type === TypeProjectEnum.Logo);

  public onItemClicked(): void {
    this.openCarouselEvent.emit(this.project());
  }
}
