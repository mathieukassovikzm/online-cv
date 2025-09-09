import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RecommendationsComponent } from './recommendations.component';
import { RecommendationCardModule } from './recommendation-card/recommendation-card.module';

const components = [
  RecommendationCardModule
];

@NgModule({
  imports: [
    CommonModule, ...components
  ],
  exports: [RecommendationsComponent],
  declarations: [RecommendationsComponent],
})
export class RecommendationsModule {}
