import { Component, Input } from '@angular/core';
import { IRecommendationModel } from 'src/app/models/home';

@Component({
    selector: 'app-recommendation-card',
    templateUrl: './recommendation-card.component.html',
    styleUrls: ['./recommendation-card.component.scss'],
    standalone: false
})
export class RecommendationCardComponent {
  @Input() person: IRecommendationModel = <IRecommendationModel>{};
  /** Width of the card */
  @Input() width: string = '';

  constructor() {}

  public getPhoto(): string {
    return this.person.photo ?? './assets/recommendations/avatar.webp';
  }
}
