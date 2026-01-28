import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { BannerComponent } from './banner/banner.component';
import { InfosRecapComponent } from './infos-recap/infos-recap.component';
import { LstEntreprisesComponent } from './lst-enterprises/lst-enterprises.component';
import { RecommendationsComponent } from './recommendations/recommendations.component';
import { ServicesComponent } from './services/services.component';

const modules = [CommonModule];
const components = [
  BannerComponent,
  InfosRecapComponent,
  ServicesComponent,
  LstEntreprisesComponent,
  RecommendationsComponent,
];

@Component({
  selector: 'app-page-home',
  templateUrl: './page-home.component.html',
  styleUrls: ['./page-home.component.scss'],
  imports: [...modules, ...components],
  standalone: true
})
export class PageHomeComponent implements OnInit {
  constructor() { }

  ngOnInit(): void { }
}
