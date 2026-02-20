import { Component, inject } from '@angular/core';
import { CardComponent } from 'src/app/shared/components/card/card.component';
import { AboutStore } from 'src/app/store/about.store';
import { UiStore } from 'src/app/store/ui.store';

const components = [CardComponent];

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.scss'],
  imports: [...components],
  standalone: true
})
export class WorkExperienceComponent {
  readonly uiStore = inject(UiStore);
  readonly aboutStore = inject(AboutStore);

  constructor() { }
}
