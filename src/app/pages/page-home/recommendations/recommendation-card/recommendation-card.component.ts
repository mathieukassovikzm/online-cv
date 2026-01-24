import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { IRecommendationModel } from 'src/app/models/home';

const modules = [CommonModule];

@Component({
  selector: 'app-recommendation-card',
  templateUrl: './recommendation-card.component.html',
  styleUrls: ['./recommendation-card.component.scss'],
  imports: [...modules],
  standalone: true
})
export class RecommendationCardComponent {
  @Input() person: IRecommendationModel = <IRecommendationModel>{};
  /** Width of the card */
  @Input() width: string = '';

  constructor() { }

  public getPhoto(): string {
    return this.person.photo ?? './assets/recommendations/avatar.webp';
  }
}
