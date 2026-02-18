import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
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
  readonly person = input<IRecommendationModel>(<IRecommendationModel>{});
  /** Width of the card */
  readonly width = input<string>('');

  constructor() { }

  public getPhoto(): string {
    return this.person().photo ?? './assets/recommendations/avatar.webp';
  }
}
